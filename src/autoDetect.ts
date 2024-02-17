import type { UserOptions } from './config.js';

import { isPackageExists } from 'local-pkg';
import { logPrefix } from './utils.js';
import { bold, dim, yellow } from 'kleur/colors';

const suggestPart = (name: string, readableName: string) => {
	console.warn(`${logPrefix}  ${yellow(`The ${readableName} config part can be enabled with `)}${bold(yellow(`\`${name}: true\``))}${yellow('!')}`);
	console.warn(`${logPrefix}  ${dim(`Disable this suggestion by setting \`${name}: false\`.`)}`);
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
