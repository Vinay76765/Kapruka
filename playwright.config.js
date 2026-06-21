// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries: 0,
  
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  webServer: {
    command: 'npm run test-server',
    url: 'http://localhost:3000',
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : true,
    screenshot : 'on',
    trace : 'on',//off,on
    navigationTimeout: 50000,
    
    
    
  },


};

