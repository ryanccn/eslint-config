import unicornPlugin from 'eslint-plugin-unicorn';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const unicorn = (): FlatConfig.Config[] => {
  return [
    unicornPlugin.configs['flat/recommended'],

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
