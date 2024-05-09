import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/api': 'https://obscure-disco-4w6q4w66r45cjp5p-3000.app.github.dev',
		},
	},
	plugins: [react()],
});
