import { expect } from '@wdio/globals'

describe("Webdriverio main page", () => {
    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle();
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username");
        await input.addValue("hello");
        await browser.pause(2000);

        await input.addValue(123);
        await browser.pause(2000);

        await expect(input).toHaveValue("hello123")
    });

    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#password");
        await input.setValue("helloworld");
        await browser.pause(2000);
        await input.setValue("hello");
        await browser.pause(2000);

        console.log(await input.getValue());
        await expect(input).toHaveValue("hello");
    });

    xit("should show click command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $(".radius");
        await browser.pause(2000);
        await loginButton.click();
        await browser.pause(4000);

        let inputUsername = await $("#username");
        await inputUsername.addValue("tomsmith");
        await browser.pause(2000);

        let inputPassword = await $("#password");
        await inputPassword.addValue("SuperSecretPassword!");
        await browser.pause(2000);

        await loginButton.click();
        await browser.pause(4000);
    });

    xit("should show getAttribute command", async () => {
        await browser.url("https://dou.ua/search");

        let inputSearch = await $("#gsc-i-id1");
        let attr = await inputSearch.getAttribute("aria-label");
        console.log("Placeholder attribute is: " + attr) // шукати
        
        await inputSearch.setValue("Cat");
        attr = await inputSearch.getValue()
        await browser.pause(2000);
        console.log("Attribute value is: " + attr) // Cat
    });

    xit("should show getLocation command", async () => {
        await browser.url("https://dou.ua");

        let inputSearch = await $("#txtGlobalSearch");
        let location = await inputSearch.getLocation();
        console.log("Location is: " + location.x + ", " + location.y) //x, y

        let xLocation = await inputSearch.getLocation("x");
        console.log("Location by x is: " + xLocation) //x
    });

    xit("should show getText command", async () => {
        await browser.url("https://webdriver.io");

        let subtitle = await $(".hero__subtitle");
        console.log("\nSubtitle text is: " + await subtitle.getText() + "\n") // Next-gen browser and mobile automation test framework for Node.js
        await expect(subtitle).toHaveText("Next-gen browser and mobile automation test framework for Node.js")
    });

    it("HW", async () => {
        await browser.url("https://webdriver.io");

        let linkAPI = await $("=API");
        await linkAPI.click();
        await expect(browser).toHaveUrl("https://webdriver.io/docs/api");

        let header = await $("h1=Introduction");
        await expect(header).toHaveText("Introduction");

        let breadcrumbs = await $(".breadcrumbs__link=Introduction");
        await expect(breadcrumbs).toHaveText("Introduction");

        let linkWebDriver = await $("a=WebDriver");
        await expect(linkWebDriver).toHaveAttribute("href", "/docs/api/webdriver");

        let SearchButton = await $(".DocSearch.DocSearch-Button");
        await SearchButton.click();

        let inputSearch = await $(".DocSearch-Input");
        await inputSearch.setValue("all is done");
        await expect(inputSearch).toHaveValue("all is done");
        
        let closeButton = await $("button[type='reset']");
        await closeButton.click();
        await browser.pause(2000);
    });
});
