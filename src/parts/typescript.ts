import type { FlatConfig, ParserOptions } from '@typescript-eslint/utils/ts-eslint';

import { ensurePackages, interopDefault } from '../utils.js';
import { globs } from '../globs.js';

interface TypeScriptOptions extends ParserOptions {}

const typescript = async (options?: TypeScriptOptions): Promise<FlatConfig.Config[]> => {
  ensurePackages('typescript-eslint');

  const plugin = await interopDefault(import('typescript-eslint'));

  return [
    ...plugin.configs.recommendedTypeChecked,

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
      rules: plugin.configs.disableTypeChecked.rules,
    },
  ];
};

export { typescript, TypeScriptOptions };
