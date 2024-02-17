import tsPlugin from 'typescript-eslint';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import { globs } from '../globs.js';

interface TypeScriptOptions {
  project?: boolean | string[];
  tsconfigRootDir?: string;
}

const typescript = (options?: TypeScriptOptions): FlatConfig.Config[] => {
  return [
    ...tsPlugin.configs.recommendedTypeChecked,

    {
      languageOptions: {
        parserOptions: {
          project: options?.project ?? true,
          tsconfigRootDir: options?.tsconfigRootDir,
        },
      },
    },

    {
      files: globs.javascript,
      rules: tsPlugin.configs.disableTypeChecked.rules,
    },
  ];
};

export { typescript, TypeScriptOptions };
