import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import { ensurePackages, interopDefault } from '../utils.js';

const unocss = async (): Promise<FlatConfig.Config[]> => {
  ensurePackages('@unocss/eslint-config');

  const config = await interopDefault(import('@unocss/eslint-config/flat'));

  return [
    // @ts-expect-error this isn't compatible either
    config,
  ];
};

export { unocss };
