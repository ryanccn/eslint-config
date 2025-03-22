import type { ConfigPart } from './_types.js';
import type { Linter } from 'eslint';

import { ensurePackages, interopDefault } from '../utils.js';

const unocss: ConfigPart = async () => {
	ensurePackages('@unocss/eslint-config');

	const config = await interopDefault(import('@unocss/eslint-config/flat'));

	return [
		config as unknown as Linter.Config,
	];
};

export { unocss };
