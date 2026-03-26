import react from '@ddoblue/eslint-config/presets/react-strict';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([...react, globalIgnores(['dist', 'vite.config.ts'])]);
