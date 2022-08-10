import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: 'test/fixtures',
  screenshotsFolder: 'test/screenshots',
  videosFolder: 'test/videos',
  projectId: '32fyob',
  viewportWidth: 800,
  viewportHeight: 800,
  screenshotOnRunFailure: false,
  video: false,

  retries: {
    runMode: 3,
    openMode: 0,
  },

  component: {
    specPattern: 'test/**/*.cy.ts',
    supportFolder: 'test/support',
    supportFile: 'test/support/e2e.ts',
    indexHtmlFile: 'test/support/index.html',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
});
