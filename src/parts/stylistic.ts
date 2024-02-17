import stylisticPlugin, { type StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const stylistic = (
  options?: StylisticCustomizeOptions,
): FlatConfig.Config[] => {
  return [
    // @ts-expect-error incompatible config types
    stylisticPlugin.configs.customize({
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
