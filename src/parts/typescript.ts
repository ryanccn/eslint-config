import type { ConfigPart } from './_types.js';
import type { Linter } from 'eslint';
import type { ParserOptions } from '@typescript-eslint/utils/ts-eslint';

import { ensurePackages, interopDefault } from '../utils.js';

import { globs } from '../globs.js';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TypeScriptOptions extends ParserOptions {}

const typescript: ConfigPart = async (options) => {
	ensurePackages('typescript-eslint');

	const plugin = await interopDefault(import('typescript-eslint'));

	const projectService = typeof options.typescript === 'boolean' ? true : options.typescript.projectService ?? true;
	const tsconfigRootDir = typeof options.typescript === 'boolean' ? undefined : options.typescript.tsconfigRootDir;

	const extraFileExtensions = [];
	if (options.svelte === true) extraFileExtensions.push('.svelte');

	return [
		...plugin.configs.recommendedTypeChecked as Linter.Config[],

		{
			languageOptions: {
				parserOptions: {
					projectService,
					tsconfigRootDir,
					extraFileExtensions,
				},
			},
		},

		{
			files: globs.javascript,
			rules: plugin.configs.disableTypeChecked.rules,
		},
	];
};

export { typescript, type TypeScriptOptions };
