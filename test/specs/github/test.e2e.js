import MainPage from "../../pages/github/main.page.js";
import SignupPage from "../../pages/github/signup.page.js";

describe("GitHub testing", () => {
    it("should create account", async () => {
        await browser.url(MainPage.mainPageURL);
        await browser.maximizeWindow();

        await MainPage.clickOnSignUpBtn();
        await SignupPage.setEmailInput("yayeyan224@bookspre.com");
        await SignupPage.clickOnEmailContinueBtn();
        await SignupPage.setPasswordInput("SuperPassword11!");
        await SignupPage.clickOnPasswordContinueBtn();
        await SignupPage.setUsernameInput("yayeyan224");
        await SignupPage.clickOnUsernameContinueBtn();
        await SignupPage.setOptionsInput("n");
        await SignupPage.clickOnOptionsContinueBtn();
        // await browser.waitUntil(async () => {
        //     return SignupPage.verifyBtn.isDisplayed();
        // }, {
        //     timeout: 10000, timeoutMsg: "Button isn't displayed"
        // })
        // await SignupPage.clickOnVerifyBtn();
        await browser.pause(10000);
    });
});