declare module '@eslint/js' {
  import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

  const configs: Record<'recommended' | 'all', Required<FlatConfig.Config>>;
  export default { configs };
}

declare module 'eslint-plugin-unicorn' {
  import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

  const configs: Record<'recommended' | 'flat/recommended', Required<FlatConfig.Config>>;
  export default { configs };
}

declare module 'eslint-config-prettier' {
  import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

  const config: Required<FlatConfig.Config>;
  export default config;
}
