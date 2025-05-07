import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';

const reactHooks: ConfigPart = async () => {
	ensurePackages('eslint-plugin-react-hooks');

	const plugin = await interopDefault(import('eslint-plugin-react-hooks'));

	return [
		plugin.configs['recommended-latest'],
	];
};

export { reactHooks };
