import { isPackageExists } from 'local-pkg';
import { bold, dim, red } from 'kleur/colors';

export const logPrefix = dim('[@ryanccn/eslint-config]');

export const ensurePackages = (pkg: string | string[]) => {
	if (typeof pkg === 'string') pkg = [pkg];

	for (const p of pkg)
		if (!isPackageExists(p)) {
			console.error(`${logPrefix}  ${red('Required peer dependency')} ${red(bold(p))} ${red('is not installed!')}`);
		}
};

export const interopDefault = async <T>(module: T | Promise<T>): Promise<T extends { default: infer U } ? U : T> => {
	const resolved = await module;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
	return (resolved as any).default ?? resolved;
};
