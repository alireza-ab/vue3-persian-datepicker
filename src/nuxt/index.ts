import { defineNuxtModule, createResolver } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: '@alireza-ab/vue3-persian-datepicker',
    configKey: 'datepicker',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  hooks: {
    'components:dirs': (dirs) => {
      const { resolve } = createResolver(import.meta.url);

      dirs.push({
        path: resolve('./components'),
        pattern: '**/*.vue',
      });
    },
  },
});
