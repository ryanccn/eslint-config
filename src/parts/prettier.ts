import { ensurePackages, interopDefault } from '../utils.js';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const prettier = async (): Promise<FlatConfig.Config[]> => {
  ensurePackages('eslint-config-prettier');

  const config = await interopDefault(import('eslint-config-prettier'));
  return [config];
};

export { prettier };
