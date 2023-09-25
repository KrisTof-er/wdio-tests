class SignUpPage {
    get emailInput() {
        return $("#email");
    }
    get passwordInput() {
        return $("#password");
    }
    get usernameInput() {
        return $("#login");
    }
    get optionsInput() {
        return $("#opt_in");
    }
    get emailContinueBtn() {
        return $("//*[@data-continue-to='password-container']");
    }
    get passwordContinueBtn() {
        return $("//*[@data-continue-to='username-container']");
    }
    get usernameContinueBtn() {
        return $("//*[@data-continue-to='opt-in-container']");
    }
    get optionsContinueBtn() {
        return $("//*[@data-continue-to='captcha-and-submit-container']");
    }
    get verifyBtn() {
        return $(".sc-nkuzb1-0.sc-d5trka-0.eZxMRy.button");
    }

    async setEmailInput(value) {
        await this.emailInput.waitForClickable();
        await this.emailInput.setValue(value);
    }
    async setPasswordInput(value) {
        await this.passwordInput.waitForClickable();
        await this.passwordInput.setValue(value);
    }
    async setUsernameInput(value) {
        await this.usernameInput.waitForClickable();
        await this.usernameInput.setValue(value);
    }
    async setOptionsInput(value) {
        await this.optionsInput.waitForClickable();
        await this.optionsInput.setValue(value);
    }

    async clickOnEmailContinueBtn() {
        await this.emailContinueBtn.waitForClickable();
        await this.emailContinueBtn.click();
    }
    async clickOnPasswordContinueBtn() {
        await this.passwordContinueBtn.waitForClickable();
        await this.passwordContinueBtn.click();
    }
    async clickOnUsernameContinueBtn() {
        await this.usernameContinueBtn.waitForClickable();
        await this.usernameContinueBtn.click();
    }
    async clickOnOptionsContinueBtn() {
        await this.optionsContinueBtn.waitForClickable();
        await this.optionsContinueBtn.click();
    }
    // async clickOnVerifyBtn() {
    //     await this.verifyBtn.waitForEnabled();
    //     await this.verifyBtn.click();
    // }
}

export default new SignUpPage();
