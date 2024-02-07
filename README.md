# Storybook Addon CSS Framework Switcher
Easy switcher it switches CSS Framework used in preview

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
        { id: 'Cirrus', srcPath: '/node_modules/cirrus-ui/dist/cirrus-all.css' },  // ID and css path
        { id: 'Bulma', srcPath: '/node_modules/bulma/css/bulma.css' },
      ],
    },
  },
};
```
