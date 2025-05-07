import { ensurePackages } from './utils.js';

import type { FlatCompat } from '@eslint/eslintrc';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let _flatCompat: FlatCompat;

export const makeFlatCompat = async () => {
	if (_flatCompat) return _flatCompat;

	ensurePackages('@eslint/eslintrc');

	const { FlatCompat } = await import('@eslint/eslintrc');
	_flatCompat = new FlatCompat({ baseDirectory: __dirname });
	return _flatCompat;
};
