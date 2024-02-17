import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';

const javascript: ConfigPart = async () => {
	ensurePackages('@eslint/js');

	const plugin = await interopDefault(import('@eslint/js'));
	return [plugin.configs.recommended];
};

export { javascript };
