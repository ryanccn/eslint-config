/* eslint-disable unicorn/no-process-exit */

import c from 'tinyrainbow';
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
	if (safelist.has(dep) || (pkg.peerDependenciesMeta[dep]?.optional === true)) {
		continue;
	}

	console.error(`Peer dependency \`${c.bold(dep)}\` is not marked as optional!`);
	allGood = false;
}

for (const [dep, version] of Object.entries(pkg.peerDependencies)) {
	if (version === '*') {
		continue;
	}

	console.error(`Peer dependency \`${c.bold(dep)}\` version is not \`*\`!`);
	allGood = false;
}

for (const dep in pkg.peerDependenciesMeta) {
	if (pkg.peerDependencies[dep] !== undefined) {
		continue;
	}

	console.error(`Nonexistent peer dependency \`${c.bold(dep)}\` is marked as optional!`);
	allGood = false;
}

if (allGood) {
	console.error(c.green('All good!'));
} else {
	console.error(c.red('Issues detected!'));
	process.exit(1);
}
