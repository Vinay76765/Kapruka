class SignupPage {


    constructor(page) 
    {
         this.page = page;
         this.signupLink = page.locator("[aria-label='Login to Your Account']");
         this.Createaccountlink = page.locator("//button[text()= 'Create Account']");
         this.firstname = page.locator("[name='firstName']");
         this.lastname = page.locator("[name='lastName']");
         this.email = page.locator("[name='email']");
         this.password = page.locator("[name='password']");
         this.confirmpassword = page.locator("[name='passwordReConfirm']");
         this.signupbutton = page.locator("//button[text()= 'Create Account']");
         this.successMessage = page.locator("[name='form2'] h3");
         this.gotoaccountbtn = page.locator("//button[contains(text(), 'Go to my account')]");4
         this.accountname = page.locator(".mhj h1");

    }

    async goTokap()
    {
        await this.page.goto("https://www.kapruka.com/?srsltid=AfmBOorOwDUMEemcwvYsu4uhuIC1C_sPjsHXMWLeCwlf2YTcM6_-Yct2");
        await this.page.waitForTimeout(50000);
    }   

    async validSignup(firstname,lastname,email,password,confirmpassword)
{
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmpassword.fill(confirmpassword);
    await this.signupbutton.click();
    await this.page.waitForLoadState('networkidle');

}
}

module.exports = SignupPage;