# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Signup.spec.js >> Signup with valid credentials
- Location: tests\Signup.spec.js:8:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.mhj h1')
Expected: "Vipin Kumar A P"
Received: "👤Vipin Kumar A P"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.mhj h1')
    - waiting for" https://www.kapruka.com/shops/customerAccounts/accountView.jsp" navigation to finish...
    - navigated to "https://www.kapruka.com/shops/customerAccounts/accountView.jsp"
    12 × locator resolved to <h1 class="acc_name acN">👤Vipin Kumar A P</h1>
       - unexpected value "👤Vipin Kumar A P"

```

```yaml
- heading "👤Vipin Kumar A P" [level=1]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | const SignupPage = require('../PageObjects/SignupPage');
  3  | 
  4  | test('check timeout', async ({ page }) => {
  5  |     console.log('Timeout:', test.info().timeout);
  6  | });
  7  | 
  8  | test('Signup with valid credentials', async ({page}) => {
  9  | 
  10 |     
  11 |     const signupPage = new SignupPage(page);
  12 |     await signupPage.goTo();
  13 |     await signupPage.signupLink.click();
  14 |     await signupPage.Createaccountlink.click();
  15 |     await signupPage.validSignup("Vipin","Kumar A P ","vipinkumar@gmail.com","Vipin76765@","Vipin76765@");
  16 |     await expect(signupPage.successMessage).toHaveText("Congratulations! Your account has been created.");
  17 |     await signupPage.gotoaccountbtn.click();
> 18 |     await expect(signupPage.accountname).toHaveText("Vipin Kumar A P");
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  19 | });
```