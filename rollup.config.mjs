import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import alias from 'rollup-plugin-alias';

export default {
  input: `src/components/DatePicker.vue`,
  plugins: [
    vue({
      preprocessStyles: true,
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
        exclude: ['src/nuxt'],
      },
    }),
    commonjs(),
    resolve({
      dedupe: ['vue'],
    }),
    replace({
      NODE_ENV: JSON.stringify('production'),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    postcss(),
    alias({
      resolve: ['.js', '.ts', '.tsx'],
      entries: [{ find: 'vue', replacement: '@vue/runtime-dom' }],
    }),
  ],
  external: ['vue'],
  output: [
    {
      file: 'dist/index-umd.js',
      name: 'DatePicker',
      format: 'umd',
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: 'dist/index-es.js',
      format: 'es',
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
  ],
};
