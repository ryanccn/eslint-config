declare module '@eslint/js' {
	import type { FlatESLintConfig } from 'eslint-define-config';

	const configs: Record<'recommended' | 'all', Required<FlatESLintConfig>>;
	export default { configs };
}

declare module 'eslint-plugin-unicorn' {
	import type { FlatESLintConfig } from 'eslint-define-config';

	const configs: Record<'recommended' | 'flat/recommended', Required<FlatESLintConfig>>;
	export default { configs };
}

declare module 'eslint-config-prettier' {
	import type { FlatESLintConfig } from 'eslint-define-config';

	const config: Required<FlatESLintConfig>;
	export default config;
}

declare module '@eslint/eslintrc' {
	import type { FlatESLintConfig } from 'eslint-define-config';

	class FlatCompat {
		constructor(opts: {
			baseDirectory?: string;
			resolvePluginsRelativeTo?: string;
		});

		config(config: unknown): FlatESLintConfig[];
		extends(...id: string[]): FlatESLintConfig[];
		plugins(...id: string[]): FlatESLintConfig[];
	}

	export { FlatCompat };
}
