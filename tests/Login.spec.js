const {test, expect} = require('@playwright/test');
const LoginPage = require('../PageObjects/LoginPage');

test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.login("vipinkumar@gmail.com", "Vipin76765@");
    await loginPage.loginButton.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'storageState.json' });
    Webcontext = await browser.newContext({ storageState: 'storageState.json' });

    
});