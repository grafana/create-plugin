# Grafana / Create Plugin

Create Grafana plugins with ease.

**ToC**

- [Create a new plugin](#create-a-new-plugin)
- [Migrate your existing plugin](#migrate-your-existing-plugin)
- [Update your plugin build config](#update-your-plugin-build-config)
- [Start developing your plugin](#start-developing-your-plugin)
- [Contributing](#contributing)

**Links**

- [Plugin developer docs](https://grafana.com/docs/grafana/latest/developers/plugins/)
- [Plugin migration guide](https://grafana.com/docs/grafana/latest/developers/plugins/migration-guide/)

**`@grafana/create-plugin`** works on macOS, Windows and Linux.<br />
If something doesn’t work, please [file an issue](https://github.com/grafana/create-plugin/issues/new).<br />
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/grafana/create-plugin/discussions).

## Create a new grafana plugin

### Scaffolding

* `mkdir -p $HOME/grafana-plugins && cd $HOME/grafana-plugins`
* Run `yarn create @grafana/plugin` and follow the questions
* Cd to the plugin directory. e.g.: `cd my-org-my-plugin-name`
* Install the dependencies: `yarn install`
* Start developing: `yarn dev` (will watch changes in your plugin code and rebuild)

### Run your plugin inside grafana (docker example)

* Run grafana inside docker:

  ```bash
  docker run -p 3000:3000 -v "$HOME"/grafana-plugins:/var/lib/grafana/plugins --name=grafana grafana/grafana:9.1.2
  ```

  NOTE: If you add or remove a plugin inside `$HOME/grafana-plugins` you need to restart grafana.

* Open http://localhost:3000
* Auth with username admin and password admin. Change the password.
* Visit `Configuration -> Plugins` and see if your new plugin is listed there as installed.

You can see more information on building grafana plugins [here](https://grafana.com/tutorials/build-a-panel-plugin/). NOTE: This guide might still contain references to toolkit. Skip to the "Anatomy of a plugin" section.

## Alternatives syntaxes to run create-plugin

#### [`npx`](https://github.com/npm/npx)

```bash
npx @grafana/create-plugin
```

#### [`npm`](https://docs.npmjs.com/cli/v7/commands/npm-init)

```bash
npm init @grafana/plugin
```

#### [`yarn`](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/) (1.x)

```bash
yarn create @grafana/plugin
```

#### [`yarn`](https://yarnpkg.com/cli/dlx) (> 2.x)

```bash
yarn dlx @grafana/create-plugin
```

---

## Migrate your existing plugin

In case you have an existing plugin previously created using the `@grafana/toolkit` you can use the
following command to migrate it to the new build tooling:

```bash
# Run this command from the root of your plugin
cd ./my-plugin

npx @grafana/create-plugin migrate
```

### Things to check after migration

- If you have a custom webpack configuration you might need to migrate it. You can read more about customizing or extending the basic configuration [here](templates/common/.config/README.md)
- Build your plugin. Run `yarn build` to check your plugin builds as intended.
- Test your plugin. Test your plugin inside grafana to confirm it is working as intended.

---

## Update your plugin build config

**In case your plugin was using `@grafana/toolkit` before make sure to migrate it first using `npx @grafana/create-plugin migrate`.**

As new Grafana versions come out we keep updating our plugin build tooling as well to stay compatible and to make it more performant.
In order to receive these changes and to make sure your plugin is compatible with the most recent Grafana versions you can use the `update` command,
that automatically updates the build configuration for you:

```bash
# Run this command from the root of your plugin
cd ./my-plugin

npx @grafana/create-plugin update
```

---

## Start developing your plugin

We have put together the following dev scripts for you, so you can start coding right away:

#### `yarn dev`

Starts the build in watch mode.
The build output (plugin bundle) is going to be exported to `./dist`.

#### `yarn build`

Creates a production build for your plugin.
The build output is going to be exported to `./dist`.

#### `yarn test`

Runs the tests under `./src` directory in watch mode.
Give your test files a `.test.tsx` or `.test.ts` extension.

#### `yarn test:ci`

Runs the tests and returns with either a zero or a non-zero exit status.

#### `yarn typecheck`

Runs the Typescript compiler against the codebase in a dry-run mode to highlight any type errors or warnings.

#### `yarn lint`

Runs ESLint against the codebase.

#### `yarn lint:fix`

Runs ESLint against the codebase and attempts to fix the simpler errors.

---

## Customizing or extending the basic configs

You can read more about customizing or extending the basic configuration [here](templates/common/.config/README.md)

## Contributing

We are always grateful for contribution! See the [CONTRIBUTING.md](./CONTRIBUTING.md) for more information.
