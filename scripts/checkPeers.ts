/* eslint-disable unicorn/no-process-exit */

import { bold, green, red } from 'kleur/colors';
import { readFile } from 'node:fs/promises';

interface PackageJson {
	peerDependencies: Record<string, string>;
	peerDependenciesMeta: Record<string, { optional?: boolean }>;
}

const pkg = await readFile('package.json', { encoding: 'utf8' })
	.then((r) => JSON.parse(r) as PackageJson);
const safelist = new Set(['eslint']);

let allGood = true;

for (const dep in pkg.peerDependencies) {
	if (
		!safelist.has(dep)
		&& (!(dep in pkg.peerDependenciesMeta)
		|| pkg.peerDependenciesMeta[dep]?.optional !== true)
	) {
		console.error(red(`Peer dependency "${bold(dep)}" is not marked as optional!`));
		allGood = false;
	}
}

for (const dep in pkg.peerDependenciesMeta) {
	if (!(dep in pkg.peerDependencies)) {
		console.error(red(`Nonexistent peer dependency "${bold(dep)}" is marked as optional!`));
		allGood = false;
	}
}

if (allGood) console.error(green('All good!'));
else process.exit(1);
