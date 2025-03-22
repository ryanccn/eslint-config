import type { UserOptions } from './config.js';

import { isPackageExists } from 'local-pkg';
import { logPrefix } from './utils.js';
import c from 'tinyrainbow';

const suggestPart = (name: string, readableName: string) => {
	console.warn(`${logPrefix} ${c.yellow(`The ${readableName} config part can be enabled with `)}${c.bold(c.yellow(`\`${name}: true\``))}${c.yellow('!')}`);
	console.warn(`${logPrefix} ${c.dim(`Disable this suggestion by setting \`${name}: false\`.`)}`);
};

export const autoDetect = (options?: UserOptions) => {
	if (isPackageExists('svelte') && options?.svelte === undefined)
		suggestPart('svelte', 'Svelte');

	if (isPackageExists('unocss') && options?.unocss === undefined)
		suggestPart('unocss', 'UnoCSS');

	if (isPackageExists('next') && options?.next === undefined)
		suggestPart('next', 'Next.js');

	if (isPackageExists('react') && options?.reactHooks === undefined)
		suggestPart('reactHooks', 'React Hooks');
};
