oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g reproduce-oclif-test-exit-zero
$ reproduce-oclif-test-exit-zero COMMAND
running command...
$ reproduce-oclif-test-exit-zero (--version)
reproduce-oclif-test-exit-zero/0.0.0 darwin-arm64 node-v20.8.1
$ reproduce-oclif-test-exit-zero --help [COMMAND]
USAGE
  $ reproduce-oclif-test-exit-zero COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`reproduce-oclif-test-exit-zero hello PERSON`](#reproduce-oclif-test-exit-zero-hello-person)
* [`reproduce-oclif-test-exit-zero hello world`](#reproduce-oclif-test-exit-zero-hello-world)
* [`reproduce-oclif-test-exit-zero help [COMMANDS]`](#reproduce-oclif-test-exit-zero-help-commands)
* [`reproduce-oclif-test-exit-zero plugins`](#reproduce-oclif-test-exit-zero-plugins)
* [`reproduce-oclif-test-exit-zero plugins:install PLUGIN...`](#reproduce-oclif-test-exit-zero-pluginsinstall-plugin)
* [`reproduce-oclif-test-exit-zero plugins:inspect PLUGIN...`](#reproduce-oclif-test-exit-zero-pluginsinspect-plugin)
* [`reproduce-oclif-test-exit-zero plugins:install PLUGIN...`](#reproduce-oclif-test-exit-zero-pluginsinstall-plugin-1)
* [`reproduce-oclif-test-exit-zero plugins:link PLUGIN`](#reproduce-oclif-test-exit-zero-pluginslink-plugin)
* [`reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...`](#reproduce-oclif-test-exit-zero-pluginsuninstall-plugin)
* [`reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...`](#reproduce-oclif-test-exit-zero-pluginsuninstall-plugin-1)
* [`reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...`](#reproduce-oclif-test-exit-zero-pluginsuninstall-plugin-2)
* [`reproduce-oclif-test-exit-zero plugins update`](#reproduce-oclif-test-exit-zero-plugins-update)

## `reproduce-oclif-test-exit-zero hello PERSON`

Say hello

```
USAGE
  $ reproduce-oclif-test-exit-zero hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/maxbeatty/reproduce-oclif-test-exit-zero/blob/v0.0.0/src/commands/hello/index.ts)_

## `reproduce-oclif-test-exit-zero hello world`

Say hello world

```
USAGE
  $ reproduce-oclif-test-exit-zero hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ reproduce-oclif-test-exit-zero hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/maxbeatty/reproduce-oclif-test-exit-zero/blob/v0.0.0/src/commands/hello/world.ts)_

## `reproduce-oclif-test-exit-zero help [COMMANDS]`

Display help for reproduce-oclif-test-exit-zero.

```
USAGE
  $ reproduce-oclif-test-exit-zero help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for reproduce-oclif-test-exit-zero.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `reproduce-oclif-test-exit-zero plugins`

List installed plugins.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ reproduce-oclif-test-exit-zero plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/index.ts)_

## `reproduce-oclif-test-exit-zero plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ reproduce-oclif-test-exit-zero plugins add

EXAMPLES
  $ reproduce-oclif-test-exit-zero plugins:install myplugin 

  $ reproduce-oclif-test-exit-zero plugins:install https://github.com/someuser/someplugin

  $ reproduce-oclif-test-exit-zero plugins:install someuser/someplugin
```

## `reproduce-oclif-test-exit-zero plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ reproduce-oclif-test-exit-zero plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/inspect.ts)_

## `reproduce-oclif-test-exit-zero plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ reproduce-oclif-test-exit-zero plugins add

EXAMPLES
  $ reproduce-oclif-test-exit-zero plugins:install myplugin 

  $ reproduce-oclif-test-exit-zero plugins:install https://github.com/someuser/someplugin

  $ reproduce-oclif-test-exit-zero plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/install.ts)_

## `reproduce-oclif-test-exit-zero plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ reproduce-oclif-test-exit-zero plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/link.ts)_

## `reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ reproduce-oclif-test-exit-zero plugins unlink
  $ reproduce-oclif-test-exit-zero plugins remove
```

## `reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ reproduce-oclif-test-exit-zero plugins unlink
  $ reproduce-oclif-test-exit-zero plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/uninstall.ts)_

## `reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ reproduce-oclif-test-exit-zero plugins unlink
  $ reproduce-oclif-test-exit-zero plugins remove
```

## `reproduce-oclif-test-exit-zero plugins update`

Update installed plugins.

```
USAGE
  $ reproduce-oclif-test-exit-zero plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.3/src/commands/plugins/update.ts)_
<!-- commandsstop -->
