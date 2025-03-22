import type { Linter } from 'eslint';

declare module '@eslint/js' {
	const configs: Record<'recommended' | 'all', Linter.Config>;
	export default { configs };
}

declare module 'eslint-plugin-unicorn' {
	const configs: Record<'recommended' | 'flat/recommended', Linter.Config>;
	export default { configs };
}

declare module 'eslint-config-prettier' {
	const config: Linter.Config;
	export default config;
}

declare module '@eslint/eslintrc' {
	class FlatCompat {
		constructor(opts: {
			baseDirectory?: string;
			resolvePluginsRelativeTo?: string;
		});

		config(config: unknown): Linter.Config[];
		extends(...id: string[]): Linter.Config[];
		plugins(...id: string[]): Linter.Config[];
	}

	export { FlatCompat };
}
