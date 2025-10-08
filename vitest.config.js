import { defineConfig } from 'vitest/config';

export default defineConfig({
test: {
    include: ['tests/**/*.js'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*'],
    environment: 'node',
    globals: true, 
},
});