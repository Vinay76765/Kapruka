const {test, expect} = require('@playwright/test');
const SignupPage = require('../PageObjects/SignupPage');

test('check timeout', async ({ page }) => {
    console.log('Timeout:', test.info().timeout);
});

test('Signup with valid credentials', async ({page}) => {

    
    const signupPage = new SignupPage(page);
    await signupPage.goTo();
    await signupPage.signupLink.click();
    await signupPage.Createaccountlink.click();
    await signupPage.validSignup("Vipin","Kumar A P ","vipinkumar@gmail.com","Vipin76765@","Vipin76765@");
    await expect(signupPage.successMessage).toHaveText("Congratulations! Your account has been created.");
    await signupPage.gotoaccountbtn.click();
    await expect(signupPage.accountname).toHaveText("Vipin Kumar A P");
});