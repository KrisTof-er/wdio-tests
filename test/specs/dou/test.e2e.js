import MainPage from "../../pages/dou/main.page.js";
import GameDevPage from "../../pages/dou/gamedev.page.js";

describe("Dou pages", () => {
    it("should click buttons", async () => {
        await browser.url("https://dou.ua");

        await MainPage.clickOnBandBtn();
        await browser.pause(1000);
        await MainPage.clickOnForumBtn();
        await browser.pause(1000);
        await MainPage.clickOnGameDevBtn();
        await browser.pause(1000);

        await expect(GameDevPage.companyGameDevsRateLink).toBeClickable();
    });

    it("should open top games rate link", async () => {
        await browser.url("https://dou.ua");

        await MainPage.clickOnGameDevBtn();
        await GameDevPage.clickOnTopGamesRateLink();

        await expect(GameDevPage.topRatesPageTitle).toHaveText("Матеріали на тему «топ ігор місяця»");
    });
});
