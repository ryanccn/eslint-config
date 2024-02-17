import { ensurePackages, interopDefault } from '../utils.js';

import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const stylistic = async (options?: StylisticCustomizeOptions): Promise<FlatConfig.Config[]> => {
  ensurePackages('@stylistic/eslint-plugin');

  const plugin = await interopDefault(import('@stylistic/eslint-plugin'));
  return [
    // @ts-expect-error incompatible config types
    plugin.configs.customize({
      indent: 2,
      quotes: 'single',
      semi: true,
      quoteProps: 'consistent-as-needed',
      arrowParens: true,
      braceStyle: '1tbs',

      ...options,
    }),
  ];
};

export { stylistic };
export { type StylisticCustomizeOptions as StylisticOptions } from '@stylistic/eslint-plugin';
