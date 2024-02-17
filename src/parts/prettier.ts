import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';

const prettier: ConfigPart = async () => {
	ensurePackages('eslint-config-prettier');

	const config = await interopDefault(import('eslint-config-prettier'));
	return [config];
};

export { prettier };
