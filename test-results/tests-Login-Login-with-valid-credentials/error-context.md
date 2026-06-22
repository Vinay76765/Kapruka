# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Login.spec.js >> Login with valid credentials
- Location: tests\Login.spec.js:14:1

# Error details

```
TypeError: signupPage.goTokap is not a function
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | const LoginPage = require('../PageObjects/LoginPage');
  3  | const SignupPage = require('../PageObjects/SignupPage');
  4  | 
  5  | let loginPage;
  6  | let signupPage;
  7  | 
  8  | test.beforeAll(async ({ browser }) => {
  9  |     const page = await browser.newPage();
  10 |     loginPage = new LoginPage(page);
  11 |     signupPage = new SignupPage(page);
  12 | });
  13 | 
  14 | test('Login with valid credentials', async ({ page, browser }) => {
> 15 |     await signupPage.goTokap();
     |                      ^ TypeError: signupPage.goTokap is not a function
  16 |     await signupPage.signupLink.click();
  17 |     await loginPage.login("vipinkumar@gmail.com", "Vipin76765@");
  18 |     page.pause();
  19 |     await loginPage.loginButton.click();
  20 |     await page.waitForLoadState('networkidle');
  21 |     await context.storageState({ path: 'storageState.json' });
  22 |     Webcontext = await browser.newContext({ storageState: 'storageState.json' });
  23 | 
  24 |     
  25 | });
```