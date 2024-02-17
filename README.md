# @ryanccn/eslint-config

A personal ESLint flat config preset.

This config includes support for JavaScript ([`@eslint/js`](https://www.npmjs.com/package/@eslint/js)), TypeScript ([TypeScript ESLint](https://typescript-eslint.io/)), [ESLint Stylistic](https://eslint.style/), [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn), React Hooks ([`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)), Next.js ([`@next/eslint-plugin-next`](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin)), Svelte ([`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte)), and UnoCSS ([`@unocss/eslint-config`](https://unocss.dev/integrations/eslint)). It provides sane, personalized defaults for these plugins while maintaining composability and customizability.

## Installation

```console
$ npm i --save-dev eslint @ryanccn/eslint-config [required peer dependencies]
```

## Usage

```javascript
import { config } from "@ryanccn/eslint-config";

export default config({
  // ...options
});
```
