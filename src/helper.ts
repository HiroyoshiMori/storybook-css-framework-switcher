import { global } from '@storybook/global';
import { addons } from "@storybook/manager-api";
import { FORCE_RE_RENDER } from "@storybook/core-events";

export const clearStyles = (selector: string | string[]) => {
  const selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};

const clearStyle = (input: string | string[]) => {
  const selector = typeof input === 'string' ? input : input.join('');
  const element = global.document.getElementById(selector);
  if (element && element.parentElement) {
    element.parentElement.removeChild(element);
    addons.getChannel().emit(FORCE_RE_RENDER);
  }
};

export const addCssFramework = (selector: string, srcPath: string) => {
  const existingStyle = global.document.getElementById(selector) as HTMLLinkElement;
  if (existingStyle) {
    if (existingStyle.href !== srcPath) {
      existingStyle.href = srcPath;
    }
  } else {
    const style = global.document.createElement('link');
    style.setAttribute('id', selector);
    style.setAttribute('rel', 'StyleSheet');
    style.setAttribute('type', 'text/css');
    style.href = srcPath;
    global.document.head.appendChild(style);
  }

  addons.getChannel().emit(FORCE_RE_RENDER);
};
