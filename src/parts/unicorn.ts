import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import { ensurePackages, interopDefault } from '../utils.js';

const unicorn = async (): Promise<FlatConfig.Config[]> => {
  ensurePackages('eslint-plugin-unicorn');

  const plugin = await interopDefault(import('eslint-plugin-unicorn'));

  return [
    plugin.configs['flat/recommended'],

    {
      rules: {
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-null': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/no-nested-ternary': 'off',
      },
    },
  ];
};

export { unicorn };
