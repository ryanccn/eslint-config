import type { FlatESLintConfig } from 'eslint-define-config';
import type { ResolvedOptions } from '../config.js';

export type ConfigPart = (options: ResolvedOptions) => Promise<FlatESLintConfig[]>;
