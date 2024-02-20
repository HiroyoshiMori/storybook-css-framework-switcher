import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    cssFrameworkSwitcher: {
      frameworks: [
        { id: 'Cirrus', srcPath: '/node_modules/cirrus-ui/dist/cirrus-all.css' },
        { id: 'Bulma', srcPath: '/node_modules/bulma/css/bulma.css' },
        { id: 'pico', srcPath: '/node_modules/@picocss/pico/css/pico.css' }
      ],
    },
  },
};

export default preview;
