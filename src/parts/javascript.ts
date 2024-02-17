import { ensurePackages, interopDefault } from '../utils.js';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const javascript = async (): Promise<FlatConfig.Config[]> => {
  ensurePackages('@eslint/js');

  const plugin = await interopDefault(import('@eslint/js'));
  return [plugin.configs.recommended];
};

export { javascript };
