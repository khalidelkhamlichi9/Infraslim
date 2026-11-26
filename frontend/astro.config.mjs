import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://infraslim.ma',
  output: 'static',
  build: {
    format: 'directory'
  }
});
