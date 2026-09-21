import { cp, writeFile } from 'node:fs/promises';

for (const file of ['README.md', 'LICENSE']) {
	await cp(file, `dist/${file}`);
}

const { default: packageJSON } = await import('../package.json', { with: { type: 'json' } });
const cleanPackageJSON: Record<string, unknown> = {};

for (const [key, value] of Object.entries(packageJSON)) {
	if (!['scripts', 'devDependencies', 'devEngines'].includes(key)) {
		cleanPackageJSON[key] = value;
	}
}

await writeFile('dist/package.json', JSON.stringify(cleanPackageJSON, undefined, 2) + '\n');
