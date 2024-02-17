import type { ConfigPart } from './_types.js';

import { makeFlatCompat } from '../flatCompat.js';
import { ensurePackages } from '../utils.js';

const reactHooks: ConfigPart = async () => {
	ensurePackages('eslint-plugin-react-hooks');

	const flatCompat = await makeFlatCompat();
	return flatCompat.extends('plugin:react-hooks/recommended');
};

export { reactHooks };
