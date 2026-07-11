# Shared Library Manager

`Shared Library Manager` is now bundled into `shared-skill-installer V1.3.0`.

It is the local visual dashboard for the shared skill library workflow.

## What it shows

- how many shared skill containers exist in the library
- whether each container is single-skill or multi-skill
- whether Codex, WorkBuddy, TRAE, and other configured clients are linked correctly
- which local folders were formally indexed into `.shared-skill-state`
- which older local skill folders were discovered but still need reconciliation
- which repositories appear to have remote updates
- the short function summary for each skill parsed from `SKILL.md`
- official local app icons for installed clients when they can be extracted from the app bundle

## Data source

The dashboard reads generated state from:

- `manager/data/library-state.js`
- `manager/data/client-icons.js`

That file is produced from:

- `~/AI-skills/.shared-skill-state/client-roots.tsv`
- `~/AI-skills/.shared-skill-state/*.skillmap.tsv`
- actual folders under `~/AI-skills`
- local client skill directories such as `~/.codex/skills`
- local Git metadata for installed repositories
- local app bundles under `/Applications` and `~/Applications` when matching client icons can be extracted

## How to refresh it

From the package root:

```bash
./scripts/build-shared-library-manager.sh
```

That refresh step also runs:

```bash
./scripts/extract-client-icons.py
```

The icon extraction mechanism is intended to scale to future clients such as Cursor and Claude when those apps are installed locally.

Or use:

```bash
./scripts/open-shared-library-manager.sh
```

On macOS, that command now prefers opening a faux local app shell:

```bash
./scripts/build-shared-library-manager-app.sh
```

By default it builds:

```text
~/Applications/Shared Library Manager.app
```

That shell app still renders the local web manager, but gives the user a stable “local app” entry point after the first install.

## Why V1.3.0 matters

Before the `V1.3.0` local-app-shell update, users could lose track of how to reopen the manager after closing the browser window once.

`V1.3.0` keeps the installer-level fixes and adds a more stable re-entry path:

- `install-shared-skill --reconcile-library` can auto-adopt older local skill folders
- missing client links can be repaired during the same reconciliation pass
- the dashboard can now display indexed and unindexed entries more truthfully
- multiline `SKILL.md` frontmatter descriptions no longer degrade into placeholder symbols such as `>` or `|`
- the manager can now be reopened through a local app shell instead of relying on the user to remember a browser URL
