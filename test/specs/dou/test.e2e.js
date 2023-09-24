import MainPage from "../../pages/dou/main.page.js";
import GameDevPage from "../../pages/dou/gamedev.page.js";
import RelocatePage from "../../pages/dou/relocate.page.js";

describe("Dou pages", () => {
    xit("should click buttons", async () => {
        await browser.url(MainPage.MainURL);

        await MainPage.clickOnBandBtn();
        await browser.pause(1000);
        await MainPage.clickOnForumBtn();
        await browser.pause(1000);
        await MainPage.clickOnGameDevBtn();
        await browser.pause(1000);

        await expect(GameDevPage.companyGameDevsRateLink).toBeClickable();
    });

    xit("should open top games rate link", async () => {
        await browser.url(MainPage.MainURL);

        await MainPage.clickOnGameDevBtn();
        await GameDevPage.clickOnTopGamesRateLink();

        await expect(GameDevPage.topRatesPageTitle).toHaveText("Матеріали на тему «топ ігор місяця»");
    });

    it("HW3", async () => {
        await browser.url(MainPage.MainURL);

        await MainPage.clickOnSalariesBtn();
        const salariesGroups = await $("#dws-ch-numbers")
        await expect(salariesGroups).toHaveTextContaining("КВАРТИЛЬ");

        await MainPage.clickOnJobsBtn();
        await expect(MainPage.jobSearchBtn).toBeDisplayed();
        await MainPage.clickOnJobSearchBtn();
        await expect(await $(".example")).toHaveTextContaining("Швидкий перехід");

        await MainPage.clickOnRelocateBtn();
        await expect(RelocatePage.newsBlock).toExist();
        await expect(RelocatePage.blogsBlock).toExist();
        await expect(RelocatePage.forumBlock).toExist();
    })
});
