import { isPackageExists } from 'local-pkg';
import c from 'tinyrainbow';

export const logPrefix = c.dim('[@ryanccn/eslint-config]');

export const ensurePackages = (pkg: string | string[]) => {
	if (typeof pkg === 'string') pkg = [pkg];

	for (const p of pkg)
		if (!isPackageExists(p)) {
			console.error(`${logPrefix}  ${c.red('Required peer dependency')} ${c.red(c.bold(p))} ${c.red('is not installed!')}`);
		}
};

export const interopDefault = async <T>(module: T | Promise<T>): Promise<T extends { default: infer U } ? U : T> => {
	const resolved = await module;
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
	return (resolved as any).default ?? resolved;
};
