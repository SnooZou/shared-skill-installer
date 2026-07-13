ObjC.import('Cocoa');
ObjC.import('Foundation');
ObjC.import('WebKit');
ObjC.import('stdlib');

const APP_TITLE = 'Shared Skill Manager';
const DEFAULT_SHARED_ROOT = '~/AI-skills';
const CONFIG_PATH = '~/.shared-skill-installer/config.json';
const HOST = '127.0.0.1';
const PORT = '8765';
const DEBUG_LOG_PATH = '/tmp/shared-library-manager-app-debug.log';
const SERVER_LOG_PATH = '/tmp/shared-library-manager-app.log';

let windowRef = null;
let webViewRef = null;
let serverTaskRef = null;
let activeSharedRoot = null;
let controllerRef = null;
let cacheBuster = String(Date.now());

function unwrap(value) {
  return ObjC.unwrap(value);
}

function expandUserPath(rawPath) {
  return unwrap($(rawPath).stringByExpandingTildeInPath);
}

function fileExists(path) {
  return $.NSFileManager.defaultManager.fileExistsAtPath($(path));
}

function appendTextFile(path, text) {
  const fileManager = $.NSFileManager.defaultManager;
  if (!fileManager.fileExistsAtPath($(path))) {
    fileManager.createFileAtPathContentsAttributes($(path), $.NSData.data, $.NSDictionary.dictionary);
  }
  const handle = $.NSFileHandle.fileHandleForWritingAtPath($(path));
  handle.seekToEndOfFile;
  handle.writeData($(text).dataUsingEncoding($.NSUTF8StringEncoding));
  handle.closeFile;
}

function debugLog(message) {
  appendTextFile(DEBUG_LOG_PATH, (new Date()).toISOString() + ' ' + message + '\n');
}

function runCommand(launchPath, args) {
  const task = $.NSTask.alloc.init;
  task.setLaunchPath($(launchPath));
  task.setArguments(args);
  const pipe = $.NSPipe.pipe;
  task.setStandardOutput(pipe);
  task.setStandardError(pipe);
  try {
    task.launch;
    task.waitUntilExit;
    const data = pipe.fileHandleForReading.readDataToEndOfFile;
    return {
      status: task.terminationStatus,
      output: unwrap($.NSString.alloc.initWithDataEncoding(data, $.NSUTF8StringEncoding)) || '',
    };
  } catch (error) {
    return {
      status: 1,
      output: String(error),
    };
  }
}

function readSharedRoot() {
  const configFile = expandUserPath(CONFIG_PATH);
  if (fileExists(configFile)) {
    const data = $.NSData.dataWithContentsOfFile($(configFile));
    if (data) {
      const error = Ref();
      const payload = $.NSJSONSerialization.JSONObjectWithDataOptionsError(data, 0, error);
      if (payload) {
        const root = payload.objectForKey($('shared_root'));
        if (root) {
          return unwrap(root);
        }
      }
    }
  }
  return expandUserPath(DEFAULT_SHARED_ROOT);
}

function packageRoot() {
  return activeSharedRoot + '/shared-skill-installer';
}

function managerServerScript() {
  return packageRoot() + '/scripts/shared-library-manager-server.py';
}

function pythonExecutable() {
  const candidates = [
    '/usr/bin/python3',
    '/opt/homebrew/bin/python3',
    '/usr/local/bin/python3',
  ];
  for (const candidate of candidates) {
    if ($.NSFileManager.defaultManager.isExecutableFileAtPath($(candidate))) {
      return candidate;
    }
  }
  return '/usr/bin/python3';
}

function managerURL() {
  return 'http://' + HOST + ':' + PORT + '/?ts=' + cacheBuster;
}

function managerRequest() {
  return $.NSURLRequest.requestWithURL($.NSURL.URLWithString($(managerURL())));
}

function renderPlaceholder(title, body) {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const safeBody = body
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/\n/g, '<br>');

  const html = [
    '<!doctype html>',
    '<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">',
    '<style>:root{color-scheme:dark;}body{margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at top,#11182a 0%,#090b10 62%,#06070a 100%);color:#f7f4ee;font-family:Inter,-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif;}main{width:min(700px,calc(100vw - 64px));border-radius:28px;padding:30px;background:rgba(18,21,30,.88);border:1px solid rgba(132,148,181,.24);box-shadow:0 24px 70px rgba(0,0,0,.35);}h1{margin:0 0 14px;font-size:28px;line-height:1.15;}p{margin:0;color:rgba(238,234,226,.74);font-size:16px;line-height:1.65;}</style>',
    '</head><body><main><h1>' + safeTitle + '</h1><p>' + safeBody + '</p></main></body></html>',
  ].join('');

  webViewRef.loadHTMLStringBaseURL($(html), $.NSURL.URLWithString($('about:blank')));
}

function startServerTask() {
  const script = managerServerScript();
  debugLog('startServerTask script=' + script);

  if (!fileExists(script)) {
    renderPlaceholder(
      'Manager Not Found',
      'The local manager server script is missing.\n\nExpected path:\n' + script
    );
    return;
  }

  if (!fileExists(SERVER_LOG_PATH)) {
    $.NSFileManager.defaultManager.createFileAtPathContentsAttributes($(SERVER_LOG_PATH), $.NSData.data, $.NSDictionary.dictionary);
  }

  const task = $.NSTask.alloc.init;
  task.setLaunchPath(pythonExecutable());
  task.setArguments([
    script,
    '--shared-root', activeSharedRoot,
    '--host', HOST,
    '--port', PORT,
  ]);

  const logHandle = $.NSFileHandle.fileHandleForWritingAtPath($(SERVER_LOG_PATH));
  if (logHandle) {
    logHandle.seekToEndOfFile;
    task.setStandardOutput(logHandle);
    task.setStandardError(logHandle);
  }

  try {
    task.launch;
    serverTaskRef = task;
    debugLog('server launch requested pid=' + task.processIdentifier);
  } catch (error) {
    debugLog('server launch failed ' + error);
    renderPlaceholder(
      'Failed To Launch',
      'The local manager service could not be started.\n\n' + error
    );
  }
}

function stopExistingServerOnPort() {
  const lsof = '/usr/sbin/lsof';
  const kill = '/bin/kill';
  if (!fileExists(lsof) || !fileExists(kill)) {
    return;
  }
  const lookup = runCommand(lsof, ['-ti', 'tcp:' + PORT, '-sTCP:LISTEN']);
  if (lookup.status !== 0 || !lookup.output.trim()) {
    debugLog('no stale server found on port ' + PORT);
    return;
  }
  const pids = lookup.output
    .split(/\s+/)
    .map((value) => value.trim())
    .filter(Boolean);
  for (const pid of pids) {
    debugLog('terminating stale server pid=' + pid);
    runCommand(kill, ['-TERM', pid]);
  }
}

function prepareWindow(controller) {
  const windowStyle =
    $.NSWindowStyleMaskTitled |
    $.NSWindowStyleMaskClosable |
    $.NSWindowStyleMaskResizable |
    $.NSWindowStyleMaskMiniaturizable;

  const rect = $.NSMakeRect(0, 0, 1320, 860);
  const window = $.NSWindow.alloc.initWithContentRectStyleMaskBackingDefer(
    rect,
    windowStyle,
    $.NSBackingStoreBuffered,
    false
  );
  window.setTitle($(APP_TITLE));
  window.center;
  window.setMinSize($.NSMakeSize(1080, 720));

  const configuration = $.WKWebViewConfiguration.alloc.init;
  const webView = $.WKWebView.alloc.initWithFrameConfiguration(rect, configuration);

  window.setContentView(webView);
  window.setDelegate(controller);
  window.makeKeyAndOrderFront(null);

  windowRef = window;
  webViewRef = webView;
}

const SharedLibraryManagerController = ObjC.registerSubclass({
  name: 'SharedLibraryManagerController',
  methods: {
    'windowWillClose:': {
      types: ['void', ['id']],
      implementation: function(notification) {
        debugLog('windowWillClose');
        if (serverTaskRef && serverTaskRef.isRunning) {
          serverTaskRef.terminate;
          debugLog('server task terminated');
        }
        $.NSApp.terminate(null);
      },
    },
    'loadManager:': {
      types: ['void', ['id']],
      implementation: function(timer) {
        debugLog('loadManager url=' + managerURL());
        if (webViewRef) {
          webViewRef.loadRequest(managerRequest());
        }
      },
    },
  },
});

function boot() {
  debugLog('boot');
  activeSharedRoot = readSharedRoot();
  debugLog('shared root=' + activeSharedRoot);
  prepareWindow(controllerRef);
  $.NSURLCache.sharedURLCache.removeAllCachedResponses;
  stopExistingServerOnPort();
  renderPlaceholder(
    'Loading Shared Skill Manager',
    'Preparing your local shared-skill dashboard...'
  );
  startServerTask();
  $.NSApp.activateIgnoringOtherApps(true);
  $.NSTimer.scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(
    0.85,
    controllerRef,
    'loadManager:',
    null,
    false
  );
  $.NSTimer.scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(
    2.2,
    controllerRef,
    'loadManager:',
    null,
    false
  );
}

const app = $.NSApplication.sharedApplication;
app.setActivationPolicy($.NSApplicationActivationPolicyRegular);
controllerRef = $.SharedLibraryManagerController.alloc.init;
boot();
app.run;
