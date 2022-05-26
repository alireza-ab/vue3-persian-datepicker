import { defineNuxtModule, createResolver, installModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@alireza-ab/vue3-persian-datepicker',
    configKey: 'datepicker',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  setup(options, nuxt) {
    const { include } = nuxt.options.vite.optimizeDeps!;
    nuxt.options.vite.optimizeDeps!.include = [
      ...(include || []),
      '@alireza-ab/persian-date',
    ];

    if (options.PersianDate) installModule('@alireza-ab/persian-date');
  },
  hooks: {
    'components:dirs': (dirs) => {
      const { resolve } = createResolver(import.meta.url);

      dirs.push({
        path: resolve('../src/components'),
        pattern: '**/*.vue',
      });
    },
  },
});
