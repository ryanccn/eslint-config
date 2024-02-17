/* eslint-disable @typescript-eslint/no-unsafe-return */

import unocssConfig from '@unocss/eslint-config/flat';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

const unocss = (): FlatConfig.Config[] => {
  return [
    // @ts-expect-error this isn't compatible either
    unocssConfig,
  ];
};

export { unocss };
