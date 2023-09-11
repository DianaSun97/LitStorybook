# GoERP Design system

This project contains GoERP design system and components.

## Structure

- [packages/components](packages/components) contains custom web components based on [LitElement](https://lit.dev/).
- [packages/playground](packages/playground) contains [Storybook](https://storybook.js.org/) playground where components can be tested.

## Development

Run once:

```shell
npm install
npm run build:playgound
```

Then to develop components:

```shell
npm run start:playgound
```

### Components

Each component should be in its own JS file in [components/src](packages/components/src) directory.
It must then be added to [_lib.js](components/src/_lib.js) to be included in the build.

Then, a `<component>.stories.js` must be created in [playground/stories](packages/playground/stories) so that it's
visible in the storybook. Develop component this way and deploy when it's ready.

## Build

### Library

To build the library:

```shell
npm run build:components
```

Result will be in `packages/components/dist`.

### Documentation

To build the documentation:

```shell
npm run build:playground
```

Result will be in `packages/playground/dist`.