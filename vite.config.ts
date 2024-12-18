import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/components/DatePicker.vue',
      name: 'DatePicker',
      fileName: (format) => `index-${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    // rollupOptions: {
    //   input: 'src/components/DatePicker.vue',
    //   output: [
    //     {
    //       // file: 'index.common.js',
    //       format: 'cjs',
    //       inlineDynamicImports: true,
    //       manualChunks: undefined,
    //     },
    //     {
    //       // file: 'index.esm.js',
    //       format: 'es',
    //       inlineDynamicImports: true,
    //       manualChunks: undefined,
    //     },
    //   ],
    //   plugins: [common({}), resolve({})],
    // },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
