import eslintConfigPrettier from 'eslint-config-prettier';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const prettier = (): FlatConfig.Config[] => {
  return [eslintConfigPrettier];
};

export { prettier };
