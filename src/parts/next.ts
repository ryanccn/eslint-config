import type { ConfigPart } from './_types.js';

import { ensurePackages, interopDefault } from '../utils.js';

const next: ConfigPart = async () => {
	ensurePackages('@next/eslint-plugin-next');

	const plugin = await interopDefault(import('@next/eslint-plugin-next'));

	return [
		plugin.configs.recommended,
	];
};

export { next };
