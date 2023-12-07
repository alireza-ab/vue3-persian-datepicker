import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
} from '@nuxt/kit';

export interface DatePickerNuxtOptions {
  PersianDate?: boolean;
}

export default defineNuxtModule<DatePickerNuxtOptions>({
  meta: {
    name: '@alireza-ab/vue3-persian-datepicker',
    configKey: 'datepicker',
    compatibility: {
      nuxt: '^3.0.0-rc',
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

    const { resolve } = createResolver(import.meta.url);

    if (options.PersianDate)
      addImportsDir(resolve('../../src/nuxt/composable'));

    addComponentsDir({
      path: resolve('../../src/components'),
      pattern: '**/*.vue',
    });
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
