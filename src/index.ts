import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import { globs } from './globs.js';

import { javascript } from './parts/javascript.js';
import { typescript, type TypeScriptOptions } from './parts/typescript.js';
import { unicorn } from './parts/unicorn.js';
import { stylistic, type StylisticOptions } from './parts/stylistic.js';

import { unocss } from './parts/unocss.js';

import globals from 'globals';
type GlobalName = keyof typeof globals;

interface Options {
  ignores?: string[];
  globals?: GlobalName[];

  javascript?: boolean;
  typescript?: boolean | TypeScriptOptions;
  unicorn?: boolean;

  stylistic?: boolean | StylisticOptions;
  prettier?: boolean;

  unocss?: boolean;

  rules?: FlatConfig.Rules;
}

interface ResolvedOptions {
  ignores: string[];
  globals: GlobalName[];

  javascript: boolean;
  typescript: boolean | TypeScriptOptions;
  unicorn: boolean;

  stylistic: boolean | StylisticOptions;
  prettier: boolean;

  unocss: boolean;

  rules: FlatConfig.Rules;
}

const resolveOptions = (options?: Options): ResolvedOptions => {
  return {
    ignores: [...globs.ignore, ...(options?.ignores ?? [])],
    globals: options?.globals ?? ['es2021'],

    javascript: options?.javascript ?? true,
    typescript: options?.typescript ?? true,
    unicorn: options?.unicorn ?? true,

    stylistic: options?.stylistic ?? false,
    prettier: !options?.stylistic && (options?.prettier ?? true),

    unocss: options?.unocss ?? false,

    rules: options?.rules ?? {},
  };
};

const getGlobals = (names: GlobalName[]): FlatConfig.GlobalsConfig => {
  let thisGlobals: FlatConfig.GlobalsConfig = {};

  for (const global of names) {
    thisGlobals = { ...thisGlobals, ...globals[global] };
  }

  return thisGlobals;
};

const config = (options?: Options): FlatConfig.Config[] => {
  const resolvedOptions = resolveOptions(options);

  const ret: FlatConfig.Config[] = [];

  if (resolvedOptions.ignores && resolvedOptions.ignores.length > 0) {
    ret.push({ ignores: resolvedOptions.ignores });
  }

  ret.push({
    languageOptions: {
      globals: getGlobals(resolvedOptions.globals),
    },
  });

  if (resolvedOptions.javascript === true) {
    ret.push(...javascript());
  }

  if (resolvedOptions.typescript === true) {
    ret.push(...typescript());
  } else if (resolvedOptions.typescript !== false) {
    ret.push(...typescript(resolvedOptions.typescript));
  }

  if (resolvedOptions.unicorn === true) {
    ret.push(...unicorn());
  }

  if (resolvedOptions.unocss === true) {
    ret.push(...unocss());
  }

  if (resolvedOptions.stylistic === true) {
    ret.push(...stylistic());
  } else if (resolvedOptions.stylistic !== false) {
    ret.push(...stylistic(resolvedOptions.stylistic));
  }

  if (resolvedOptions.rules) {
    ret.push({ rules: resolvedOptions.rules });
  }

  return ret;
};

export { config };

export { javascript } from './parts/javascript.js';
export { typescript } from './parts/typescript.js';
export { unicorn } from './parts/unicorn.js';
export { stylistic } from './parts/stylistic.js';

export { unocss } from './parts/unocss.js';
