# Storybook Addon CSS Framework Switcher
Easy switcher it switches CSS Framework used in preview and add environment variable CSS_FRAMEWORK which can be
used to identify which css framework is used now
![Github](https://img.shields.io/github/v/release/HiroyoshiMori/storybook-css-framework-switcher)


## Installation

First, install the package.

```sh
npm install --save-dev @hiroyoshi-mori/storybook-css-framework-switcher
```

Then, register it as an addon in `.storybook/main.js`.

```js
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  // ...rest of config
  addons: [
    '@storybook/addon-essentials',
    '@hiroyoshi-mori/storybook-css-framework-switcher', // 👈 register the addon here
  ],
  staticDirs: [
    { from: '../node_modules/cirrus-ui/dist/', to: '/assets/cirrus-ui'}, // 👈 Copy files from css framework dist directories to /assets
    { from: '../node_modules/bulma/css/', to: '/assets/bulma'},
  ],
};

export default config;
```

## Usage

The primary way to use this addon is to define the `exampleParameter` parameter. You can do this the
component level, as below, to affect all stories in the file, or you can do it for a single story.

```typescript
const preview: Preview = {
  parameters: {
    cssFrameworkSwitcher: {
      frameworks: [
        { id: 'Cirrus', srcPath: '/assets/cirrus-ui/cirrus-all.css' },  // 👈 Set ID and css path to load
        { id: 'Bulma', srcPath: '/assets/bulma/bulma.css' },
      ],
    },
  },
};
```

## Copyright and license ![Github](https://img.shields.io/github/license/HiroyoshiMori/storybook-css-framework-switcher?logo=Github)

Copyright 2024 Hiroyoshi Mori / Script Laboratory.
