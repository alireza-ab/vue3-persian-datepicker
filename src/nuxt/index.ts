import { defineNuxtModule, createResolver, addAutoImportDir } from '@nuxt/kit';

export interface DatePickerNuxtOptions {
  PersianDate?: boolean;
}

export default defineNuxtModule<DatePickerNuxtOptions>({
  meta: {
    name: '@alireza-ab/vue3-persian-datepicker',
    configKey: 'datepicker',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    PersianDate: false,
  },
  setup(options, nuxt) {
    const { include } = nuxt.options.vite.optimizeDeps!;
    nuxt.options.vite.optimizeDeps!.include = [
      ...(include || []),
      '@alireza-ab/persian-date',
    ];

    if (options.PersianDate) addAutoImportDir('../src/nuxt/composable');
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

declare module '@nuxt/schema' {
  interface NuxtConfig {
    datepicker?: DatePickerNuxtOptions;
  }
  interface NuxtOptions {
    datepicker?: DatePickerNuxtOptions;
  }
}
