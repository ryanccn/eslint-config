import type { FlatESLintConfig, LanguageOptions } from 'eslint-define-config';

import { autoDetect } from './autoDetect.js';

import { javascript } from './parts/javascript.js';
import { typescript } from './parts/typescript.js';
import { unicorn } from './parts/unicorn.js';

import { stylistic } from './parts/stylistic.js';
import { prettier } from './parts/prettier.js';

import { svelte } from './parts/svelte.js';
import { unocss } from './parts/unocss.js';
import { reactHooks } from './parts/reactHooks.js';
import { next } from './parts/next.js';

import { resolveOptions, type UserOptions, type GlobalName } from './config.js';
import globals from 'globals';

const getGlobals = (names: GlobalName[]): LanguageOptions['globals'] => {
	let thisGlobals: LanguageOptions['globals'] = {};

	for (const global of names) {
		thisGlobals = { ...thisGlobals, ...globals[global] };
	}

	return thisGlobals;
};

const pushPart = async (
	configArray: FlatESLintConfig[],
	newConfigs: FlatESLintConfig[] | Promise<FlatESLintConfig[]>,
) => {
	const resolvedNewConfigs = await newConfigs;
	configArray.push(...resolvedNewConfigs);
};

const config = async (options?: UserOptions): Promise<FlatESLintConfig[]> => {
	autoDetect(options);
	const resolvedOptions = resolveOptions(options);

	const ret: FlatESLintConfig[] = [];

	if (resolvedOptions.ignores && resolvedOptions.ignores.length > 0) {
		ret.push({ ignores: resolvedOptions.ignores });
	}

	if (resolvedOptions.globals && resolvedOptions.globals.length > 0) {
		ret.push({
			languageOptions: {
				globals: getGlobals(resolvedOptions.globals),
			},
		});
	}

	if (resolvedOptions.javascript !== false) {
		await pushPart(ret, javascript(resolvedOptions));
	}

	if (resolvedOptions.typescript !== false) {
		await pushPart(ret, typescript(resolvedOptions));
	}

	if (resolvedOptions.unicorn !== false) {
		await pushPart(ret, unicorn(resolvedOptions));
	}

	if (resolvedOptions.svelte !== false) {
		await pushPart(ret, svelte(resolvedOptions));
	}

	if (resolvedOptions.unocss !== false) {
		await pushPart(ret, unocss(resolvedOptions));
	}

	if (resolvedOptions.next !== false) {
		await pushPart(ret, next(resolvedOptions));
	}

	if (resolvedOptions.reactHooks !== false) {
		await pushPart(ret, reactHooks(resolvedOptions));
	}

	if (resolvedOptions.stylistic !== false) {
		await pushPart(ret, stylistic(resolvedOptions));
	}

	if (resolvedOptions.prettier !== false) {
		await pushPart(ret, prettier(resolvedOptions));
	}

	if (resolvedOptions.rules !== undefined) {
		ret.push({ rules: resolvedOptions.rules });
	}

	if (resolvedOptions.extraConfigs) {
		ret.push(...resolvedOptions.extraConfigs);
	}

	return ret;
};

export { config };

export { javascript } from './parts/javascript.js';
export { typescript } from './parts/typescript.js';
export { unicorn } from './parts/unicorn.js';

export { stylistic } from './parts/stylistic.js';
export { prettier } from './parts/prettier.js';

export { svelte } from './parts/svelte.js';
export { unocss } from './parts/unocss.js';
export { reactHooks } from './parts/reactHooks.js';
export { next } from './parts/next.js';
