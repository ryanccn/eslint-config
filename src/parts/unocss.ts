import type { ConfigPart } from './_types.js';
import type { FlatESLintConfig } from 'eslint-define-config';

import { ensurePackages, interopDefault } from '../utils.js';

const unocss: ConfigPart = async () => {
	ensurePackages('@unocss/eslint-config');

	const config = await interopDefault(import('@unocss/eslint-config/flat'));

	return [
		config as FlatESLintConfig,
	];
};

export { unocss };
