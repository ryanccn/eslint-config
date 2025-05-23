import type { Linter } from 'eslint';
import type { TypeScriptOptions } from './parts/typescript.js';
import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';

import { globs } from './globs.js';

import type globals from 'globals';
type GlobalName = keyof typeof globals;

interface UserOptions {
	/**
	 * Extra ignore glob patterns to pass to ESLint in addition to the default set.
	 */
	ignores?: string[];

	/**
	 * Global names to provide to ESLint.
	 *
	 * Names are based on the [`globals`](https://www.npmjs.com/package/globals) package.
	 *
	 * @default ['es2021']
	 */
	globals?: GlobalName[];

	/**
	 * The JavaScript config part, based on [`@eslint/js`](https://www.npmjs.com/package/@eslint/js).
	 *
	 * **Peer dependencies:** `@eslint/js`
	 *
	 * @default true
	 */
	javascript?: boolean;

	/**
	 * The TypeScript config part, based on [TypeScript ESLint](https://typescript-eslint.io/).
	 *
	 * An object configuring the TypeScript ESLint parser can be passed here in lieu of a boolean.
	 *
	 * **Peer dependencies:** `typescript-eslint`
	 *
	 * @default true
	 */
	typescript?: boolean | TypeScriptOptions;

	/**
	 * The [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) config part.
	 *
	 * **Peer dependencies:** `eslint-plugin-unicorn`
	 *
	 * @default true
	 */
	unicorn?: boolean;

	/**
	 * The [ESLint Stylistic](https://eslint.style/) config part.
	 *
	 * An object passing additional options to [`stylistic.configs.customize`](https://eslint.style/guide/config-presets#configuration-factory)
	 * can be passed here in lieu of a boolean.
	 *
	 * **Peer dependencies:** `@stylistic/eslint-plugin`
	 *
	 * @default false
	 */
	stylistic?: boolean | StylisticCustomizeOptions;

	/**
	 * The [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) config part.
	 *
	 * This config part is forcibly disabled when `stylistic` is enabled, regardless of the
	 * user-provided config value.
	 *
	 * **Peer dependencies:** `eslint-config-prettier`
	 *
	 * @default true
	 */
	prettier?: boolean;

	/**
	 * The Svelte config part, based on [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte).
	 *
	 * **Peer dependencies:** `eslint-plugin-svelte`, `typescript-eslint`, `svelte`
	 *
	 * @default false
	 */
	svelte?: boolean;

	/**
	 * The UnoCSS config part, based on [`@unocss/eslint-config`](https://unocss.dev/integrations/eslint).
	 *
	 * **Peer dependencies:** `@unocss/eslint-config`
	 *
	 * @default false
	 */
	unocss?: boolean;

	/**
	 * The Next.js config part, based on [`@next/eslint-plugin-next`](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin).
	 *
	 * This part is loaded via [`FlatCompat`](https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config)
	 * provided by `@eslint/eslintrc`.
	 *
	 * **Peer dependencies:** `@next/eslint-plugin-next`, `@eslint/eslintrc`
	 *
	 * @default false
	 */
	next?: boolean;

	/**
	 * The React Hooks config part, based on [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks).
	 *
	 * **Peer dependencies:** `eslint-plugin-react-hooks`
	 *
	 * @default false
	 */
	reactHooks?: boolean;

	/**
	 * Extra rule levels and options to specify, overriding the presets previous loaded
	 * in enabled config parts.
	 */
	rules?: Partial<Linter.RulesRecord>;

	/**
	 * Extra flat configs that are added to the end.
	 *
	 * Without using this option, you can also do this:
	 *
	 * ```javascript
	 * export default [
	 *   ...config(options),
	 *   // extra configs
	 * ]
	 * ```
	 */
	extraConfigs?: Linter.Config[];
}

interface ResolvedOptions {
	ignores: string[];
	globals: GlobalName[];
	javascript: boolean;
	typescript: boolean | TypeScriptOptions;
	unicorn: boolean;
	stylistic: boolean | StylisticCustomizeOptions;
	prettier: boolean;
	svelte: boolean;
	unocss: boolean;
	next: boolean;
	reactHooks: boolean;
	rules?: Partial<Linter.RulesRecord>;
	extraConfigs?: Linter.Config[];
}

const resolveOptions = (options?: UserOptions): ResolvedOptions => {
	return {
		ignores: [...globs.ignore, ...(options?.ignores ?? [])],
		globals: options?.globals ?? ['es2021'],

		javascript: options?.javascript ?? true,
		typescript: options?.typescript ?? true,
		unicorn: options?.unicorn ?? true,

		stylistic: options?.stylistic ?? false,
		prettier: !options?.stylistic && (options?.prettier ?? true),

		svelte: options?.svelte ?? false,
		unocss: options?.unocss ?? false,
		next: options?.next ?? false,
		reactHooks: options?.reactHooks ?? false,

		rules: options?.rules,
		extraConfigs: options?.extraConfigs,
	};
};

export { resolveOptions };
export type { UserOptions, ResolvedOptions, GlobalName };
