import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';

const unicorn: ConfigPart = async () => {
	ensurePackages('eslint-plugin-unicorn');

	const plugin = await interopDefault(import('eslint-plugin-unicorn'));

	return [
		plugin.configs.recommended,
		{
			rules: {
				'unicorn/prevent-abbreviations': 'off',
				'unicorn/no-null': 'off',
				'unicorn/filename-case': 'off',
				'unicorn/no-nested-ternary': 'off',
			},
		},
	];
};

export { unicorn };
