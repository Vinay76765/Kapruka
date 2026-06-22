const SignupPage = require('../PageObjects/SignupPage');
class LoginPage {
    constructor(page) {
        this.page = page;
        this.SignupPage = new SignupPage(page);
        this.email = this.page.getByPlaceholder('Enter email');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = page.locator("[value='Login']");
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    
    }
}

module.exports = LoginPage;