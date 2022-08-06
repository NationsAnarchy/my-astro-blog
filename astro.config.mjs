import { defineConfig } from 'astro/config';
<<<<<<< HEAD
import vercel from '@astrojs/vercel/serverless'
=======
import preact from '@astrojs/preact';
>>>>>>> parent of 1191687 (Add Vercel package for Astro)

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	site: `http://astro.build`,
});
