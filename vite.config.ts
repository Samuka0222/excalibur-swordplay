import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'src', 'app'),
			'@ui': path.resolve(__dirname, 'src', 'ui'),
		},
	},
	server: {
		port: 3000,
	},
});
