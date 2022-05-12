import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/nuxt/index'],
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  },
  outDir: 'nuxt',
});
