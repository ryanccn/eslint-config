import jsPlugin from '@eslint/js';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const javascript = (): FlatConfig.Config[] => {
  return [jsPlugin.configs.recommended];
};

export { javascript };
