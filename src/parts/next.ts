import type { ConfigPart } from './_types.js';

import { makeFlatCompat } from '../compat.js';
import { ensurePackages } from '../utils.js';

const next: ConfigPart = async () => {
	ensurePackages('@next/eslint-plugin-next');

	const flatCompat = await makeFlatCompat();
	return flatCompat.extends('plugin:@next/next/recommended');
};

export { next };
