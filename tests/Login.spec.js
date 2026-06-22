const {test, expect} = require('@playwright/test');
const LoginPage = require('../PageObjects/LoginPage');
const SignupPage = require('../PageObjects/SignupPage');

let loginPage;
let signupPage;

test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    loginPage = new LoginPage(page);
    signupPage = new SignupPage(page);
});

test('Login with valid credentials', async ({ page, browser }) => {
    await signupPage.goTokap();
    await signupPage.signupLink.click();
    await loginPage.login("vipinkumar@gmail.com", "Vipin76765@");
    page.pause();
    await loginPage.loginButton.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'storageState.json' });
    Webcontext = await browser.newContext({ storageState: 'storageState.json' });

    
});