import type { Linter } from 'eslint';
import type { ResolvedOptions } from '../config.js';

export type ConfigPart = (options: ResolvedOptions) => Promise<Linter.Config[]>;
