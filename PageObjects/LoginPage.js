const SignupPage = require('../PageObjects/SignupPage');
class LoginPage {
    constructor(page) {
        this.page = page;
        this.SignupPage = new SignupPage(page);
        this.loginButton = page.locator("[value='Login']");
    }

    async login(email, password) {
        await this.email.getByPlaceholder('Email address').fill(email);
        await this.password.getByPlaceholder('Password').fill(password);
        await this.loginButton.click();
    
    }
}

module.exports = LoginPage;