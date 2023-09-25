class MainPage {
    get mainPageURL() {
        return "https://github.com";
    }
    get signUpBtn() {
        return $(".position-relative.mr-lg-3.d-lg-inline-block + a");
    }

    async clickOnSignUpBtn() {
        await this.signUpBtn.click();
    }
}

export default new MainPage();
