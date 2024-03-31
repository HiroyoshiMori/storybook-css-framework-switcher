import { global } from '@storybook/global';
import { addons } from "@storybook/manager-api";
import { FORCE_RE_RENDER, UPDATE_STORY_ARGS } from "@storybook/core-events";

export const clearStyles = (selector: string | string[], forceReRender: boolean = true) => {
  const selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach((v, idx) => {
    clearStyle(v, (idx !== selectors.length - 1) ? false : forceReRender);
  });
};

const clearStyle = (input: string | string[], forceReRender: boolean = true) => {
  const metaSelectorId = 'meta_css_framework_used';
  const elementMeta = global.document.getElementById(metaSelectorId);
  if (elementMeta && elementMeta.parentElement) {
    elementMeta.setAttribute('content', '');
  }

  const selector = typeof input === 'string' ? input : input.join('');
  const element = global.document.getElementById(selector);
  if (element && element.parentElement) {
    element.parentElement.removeChild(element);
  }

  if (selector === 'css-framework-switcher-docs') {
    // addons.getChannel().emit(UPDATE_GLOBALS);
    addons.getChannel().emit(UPDATE_STORY_ARGS);
  }
  if (forceReRender) {
    addons.getChannel().emit(FORCE_RE_RENDER);
  }
};

export const addCssFramework = (selector: string, srcPath: string, frameworkName: string | undefined, forceReRender: boolean = true) => {
  if (frameworkName !== undefined) {
    const metaSelectorId = 'meta_css_framework_used';
    const elementMeta = global.document.getElementById(metaSelectorId);
    if (elementMeta) {
      elementMeta.setAttribute('content',frameworkName);
    } else {
      const meta = global.document.createElement('meta');
      meta.setAttribute('id', metaSelectorId);
      meta.setAttribute('itemprop', 'css-framework-used');
      meta.setAttribute('content',frameworkName);
      global.document.head.appendChild(meta);
    }
  }

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

  if (selector === 'css-framework-switcher-docs') {
    // addons.getChannel().emit(UPDATE_GLOBALS);
    addons.getChannel().emit(UPDATE_STORY_ARGS);
  }
  if (forceReRender) {
    addons.getChannel().emit(FORCE_RE_RENDER);
  }
};
