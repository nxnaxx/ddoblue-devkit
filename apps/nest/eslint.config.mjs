import node from '@ddoblue/eslint-config/presets/nest';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([...node, globalIgnores(['dist', '**/*.cjs'])]);

export default eslintConfig;
