import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';

const stylistic: ConfigPart = async (options) => {
	ensurePackages('@stylistic/eslint-plugin');

	const plugin = await interopDefault(import('@stylistic/eslint-plugin'));

	return [
		plugin.configs.customize({
			indent: 'tab',
			quotes: 'single',
			semi: true,
			quoteProps: 'consistent-as-needed',
			arrowParens: true,
			braceStyle: '1tbs',

			...(typeof options.stylistic === 'boolean' ? {} : options.stylistic),
		}),
	];
};

export { stylistic };
