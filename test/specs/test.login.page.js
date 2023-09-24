import LoginPage from "./../pages/main.page.js"

describe("Login page", () => {
    it("should login into account", async () => {
        await browser.url("https://the-internet.herokuapp.com/login");

        await LoginPage.setUsernameInput("tomsmith");
        // await LoginPage.username.addValue("tomsmith");
        await expect(LoginPage.username).toHaveValue("tomsmith");
        await browser.pause(1000);
        
        await LoginPage.setPasswordInput("SuperSecretPassword!");
        await expect(LoginPage.password).toHaveValue("SuperSecretPassword!");
        await browser.pause(1000);

        await LoginPage.clickOnLoginBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure");
    });
});
