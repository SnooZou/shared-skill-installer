#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>

static NSString *const kAppTitle = @"Shared Skill Manager";
static NSString *const kDefaultSharedRoot = @"~/AI-skills";
static NSString *const kConfigPath = @"~/.shared-skill-installer/config.json";
static NSString *const kHost = @"127.0.0.1";
static NSString *const kPort = @"8765";
static NSString *const kDebugLogPath = @"/tmp/shared-library-manager-app-debug.log";
static NSString *const kServerLogPath = @"/tmp/shared-library-manager-app.log";

@interface SharedLibraryManagerController : NSObject <NSApplicationDelegate, NSWindowDelegate>
@property(nonatomic, strong) NSWindow *window;
@property(nonatomic, strong) WKWebView *webView;
@property(nonatomic, strong) NSTask *serverTask;
@property(nonatomic, copy) NSString *sharedRoot;
@property(nonatomic, copy) NSString *cacheBuster;
@end

@implementation SharedLibraryManagerController

- (void)applicationDidFinishLaunching:(NSNotification *)notification {
  self.cacheBuster = [NSString stringWithFormat:@"%.0f", [[NSDate date] timeIntervalSince1970] * 1000.0];
  self.sharedRoot = [self readSharedRoot];
  [self debugLog:@"boot"];
  [self debugLog:[NSString stringWithFormat:@"shared root=%@", self.sharedRoot]];
  [self prepareWindow];
  [self stopExistingServerOnPort];
  [self renderPlaceholderWithTitle:@"Loading Shared Skill Manager"
                              body:@"Preparing your local shared-skill dashboard..."];
  [self startServerTask];
  [NSApp activateIgnoringOtherApps:YES];

  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.85 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    [self loadManager];
  });
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    [self loadManager];
  });
}

- (BOOL)applicationShouldTerminateAfterLastWindowClosed:(NSApplication *)sender {
  return YES;
}

- (void)applicationWillTerminate:(NSNotification *)notification {
  [self stopServerTask];
}

- (void)windowWillClose:(NSNotification *)notification {
  [self debugLog:@"windowWillClose"];
  [self stopServerTask];
}

- (void)prepareWindow {
  NSRect rect = NSMakeRect(0, 0, 1320, 860);
  NSWindowStyleMask style = NSWindowStyleMaskTitled |
                            NSWindowStyleMaskClosable |
                            NSWindowStyleMaskResizable |
                            NSWindowStyleMaskMiniaturizable;
  self.window = [[NSWindow alloc] initWithContentRect:rect
                                            styleMask:style
                                              backing:NSBackingStoreBuffered
                                                defer:NO];
  self.window.title = kAppTitle;
  self.window.minSize = NSMakeSize(1080, 720);
  self.window.delegate = self;
  [self.window center];

  self.webView = [[WKWebView alloc] initWithFrame:rect configuration:[[WKWebViewConfiguration alloc] init]];
  self.window.contentView = self.webView;
  [self.window makeKeyAndOrderFront:nil];
}

- (void)loadManager {
  NSString *urlString = [NSString stringWithFormat:@"http://%@:%@/?ts=%@", kHost, kPort, self.cacheBuster ?: @""];
  [self debugLog:[NSString stringWithFormat:@"loadManager url=%@", urlString]];
  NSURL *url = [NSURL URLWithString:urlString];
  if (url) {
    [self.webView loadRequest:[NSURLRequest requestWithURL:url]];
  }
}

- (void)renderPlaceholderWithTitle:(NSString *)title body:(NSString *)body {
  NSString *safeTitle = [self escapeHTML:title];
  NSString *safeBody = [[self escapeHTML:body] stringByReplacingOccurrencesOfString:@"\n" withString:@"<br>"];
  NSString *html = [NSString stringWithFormat:
                    @"<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'>"
                    "<style>:root{color-scheme:dark;}body{margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at top,#11182a 0%%,#090b10 62%%,#06070a 100%%);color:#f7f4ee;font-family:Inter,-apple-system,BlinkMacSystemFont,\"SF Pro Text\",sans-serif;}main{width:min(700px,calc(100vw - 64px));border-radius:28px;padding:30px;background:rgba(18,21,30,.88);border:1px solid rgba(132,148,181,.24);box-shadow:0 24px 70px rgba(0,0,0,.35);}h1{margin:0 0 14px;font-size:28px;line-height:1.15;}p{margin:0;color:rgba(238,234,226,.74);font-size:16px;line-height:1.65;}</style>"
                    "</head><body><main><h1>%@</h1><p>%@</p></main></body></html>", safeTitle, safeBody];
  [self.webView loadHTMLString:html baseURL:[NSURL URLWithString:@"about:blank"]];
}

- (void)startServerTask {
  NSString *script = [[self packageRoot] stringByAppendingPathComponent:@"scripts/shared-library-manager-server.py"];
  [self debugLog:[NSString stringWithFormat:@"startServerTask script=%@", script]];

  if (![[NSFileManager defaultManager] fileExistsAtPath:script]) {
    [self renderPlaceholderWithTitle:@"Manager Not Found"
                                body:[NSString stringWithFormat:@"The local manager server script is missing.\n\nExpected path:\n%@", script]];
    return;
  }

  [self ensureFileAtPath:kServerLogPath];

  NSTask *task = [[NSTask alloc] init];
  task.launchPath = [self pythonExecutable];
  task.arguments = @[
    script,
    @"--shared-root", self.sharedRoot,
    @"--host", kHost,
    @"--port", kPort,
  ];

  NSFileHandle *logHandle = [NSFileHandle fileHandleForWritingAtPath:kServerLogPath];
  if (logHandle) {
    [logHandle seekToEndOfFile];
    task.standardOutput = logHandle;
    task.standardError = logHandle;
  }

  @try {
    [task launch];
    self.serverTask = task;
    [self debugLog:[NSString stringWithFormat:@"server launch requested pid=%d", task.processIdentifier]];
  } @catch (NSException *exception) {
    [self debugLog:[NSString stringWithFormat:@"server launch failed %@", exception]];
    [self renderPlaceholderWithTitle:@"Failed To Launch"
                                body:[NSString stringWithFormat:@"The local manager service could not be started.\n\n%@", exception]];
  }
}

- (void)stopServerTask {
  if (self.serverTask && self.serverTask.isRunning) {
    [self.serverTask terminate];
    [self debugLog:@"server task terminated"];
  }
  self.serverTask = nil;
}

- (void)stopExistingServerOnPort {
  NSString *lsof = @"/usr/sbin/lsof";
  NSString *kill = @"/bin/kill";
  NSFileManager *manager = [NSFileManager defaultManager];
  if (![manager isExecutableFileAtPath:lsof] || ![manager isExecutableFileAtPath:kill]) {
    return;
  }

  NSString *output = [self runCommand:lsof arguments:@[[NSString stringWithFormat:@"-ti"], [NSString stringWithFormat:@"tcp:%@", kPort], @"-sTCP:LISTEN"]];
  NSArray<NSString *> *lines = [[output stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]] componentsSeparatedByCharactersInSet:[NSCharacterSet newlineCharacterSet]];
  NSMutableArray<NSString *> *pids = [NSMutableArray array];
  for (NSString *line in lines) {
    NSString *trimmed = [line stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
    if (trimmed.length > 0) {
      [pids addObject:trimmed];
    }
  }

  if (pids.count == 0) {
    [self debugLog:[NSString stringWithFormat:@"no stale server found on port %@", kPort]];
    return;
  }

  for (NSString *pid in pids) {
    [self debugLog:[NSString stringWithFormat:@"terminating stale server pid=%@", pid]];
    [self runCommand:kill arguments:@[@"-TERM", pid]];
  }
}

- (NSString *)readSharedRoot {
  NSString *resolved = [kConfigPath stringByExpandingTildeInPath];
  NSData *data = [NSData dataWithContentsOfFile:resolved];
  if (data) {
    NSError *error = nil;
    id payload = [NSJSONSerialization JSONObjectWithData:data options:0 error:&error];
    if ([payload isKindOfClass:[NSDictionary class]]) {
      NSString *root = ((NSDictionary *)payload)[@"shared_root"];
      if ([root isKindOfClass:[NSString class]] && root.length > 0) {
        return root;
      }
    }
  }
  return [kDefaultSharedRoot stringByExpandingTildeInPath];
}

- (NSString *)packageRoot {
  return [self.sharedRoot stringByAppendingPathComponent:@"shared-skill-installer"];
}

- (NSString *)pythonExecutable {
  NSArray<NSString *> *candidates = @[
    @"/usr/bin/python3",
    @"/opt/homebrew/bin/python3",
    @"/usr/local/bin/python3",
  ];
  for (NSString *candidate in candidates) {
    if ([[NSFileManager defaultManager] isExecutableFileAtPath:candidate]) {
      return candidate;
    }
  }
  return @"/usr/bin/python3";
}

- (void)ensureFileAtPath:(NSString *)path {
  if (![[NSFileManager defaultManager] fileExistsAtPath:path]) {
    [[NSFileManager defaultManager] createFileAtPath:path contents:[NSData data] attributes:nil];
  }
}

- (void)debugLog:(NSString *)message {
  [self ensureFileAtPath:kDebugLogPath];
  NSString *line = [NSString stringWithFormat:@"%@ %@\n", [NSISO8601DateFormatter stringFromDate:[NSDate date] timeZone:[NSTimeZone timeZoneWithAbbreviation:@"UTC"] formatOptions:NSISO8601DateFormatWithInternetDateTime], message];
  NSFileHandle *handle = [NSFileHandle fileHandleForWritingAtPath:kDebugLogPath];
  if (!handle) { return; }
  [handle seekToEndOfFile];
  [handle writeData:[line dataUsingEncoding:NSUTF8StringEncoding]];
  [handle closeFile];
}

- (NSString *)runCommand:(NSString *)launchPath arguments:(NSArray<NSString *> *)arguments {
  NSTask *task = [[NSTask alloc] init];
  task.launchPath = launchPath;
  task.arguments = arguments;
  NSPipe *pipe = [NSPipe pipe];
  task.standardOutput = pipe;
  task.standardError = pipe;

  @try {
    [task launch];
    [task waitUntilExit];
    NSData *data = [[pipe fileHandleForReading] readDataToEndOfFile];
    NSString *output = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    return output ?: @"";
  } @catch (NSException *exception) {
    return exception.description ?: @"";
  }
}

- (NSString *)escapeHTML:(NSString *)text {
  NSString *value = [text stringByReplacingOccurrencesOfString:@"&" withString:@"&amp;"];
  return [value stringByReplacingOccurrencesOfString:@"<" withString:@"&lt;"];
}

@end

int main(int argc, const char *argv[]) {
  @autoreleasepool {
    NSApplication *application = [NSApplication sharedApplication];
    SharedLibraryManagerController *delegate = [[SharedLibraryManagerController alloc] init];
    [application setActivationPolicy:NSApplicationActivationPolicyRegular];
    application.delegate = delegate;
    [application run];
  }
  return 0;
}
