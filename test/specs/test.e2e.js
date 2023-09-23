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

    xit("HW", async () => {
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

    xit("should show if an element is clickable", async () => {
        await browser.url("https://webdriver.io");

        const blogButton = await $(".button[href='/docs/gettingstarted']");
        let clickable = await blogButton.isClickable();
        console.log("\n\tIs Clickable: " + clickable + "\n")  // true
    });

    xit("should show if an element is displayed", async () => {
        await browser.url("https://webdriver.io");

        const blogButton = await $(".button[href='/docs/gettingstarted']");
        let displayed = await blogButton.isDisplayed();
        console.log("\n\tIs displayed: " + displayed + "\n")  // true
    });

    xit("should show if an element is visible", async () => {
        await browser.url("https://webdriver.io");

        const blogButton = await $(".button[href='/docs/gettingstarted']");
        let displayedInViewport = await blogButton.isDisplayedInViewport();
        console.log("\n\tIs displayed in Viewport: " + displayedInViewport + "\n")  // true

        const footer = await $(".footer__link-item[href='/docs/gettingstarted']");
        let footerDisplayedInViewport = await footer.isDisplayedInViewport();
        console.log("\n\tIs Footer displayed in Viewport: " + footerDisplayedInViewport + "\n");  // false
    });

    xit("should show if an element is enabled", async () => {
        await browser.url("https://webdriver.io");

        const getStartedButton = await $(".button[href='/docs/gettingstarted']");
        let isEnabled = await getStartedButton.isEnabled();
        console.log("\n\tIs get started button enabled: " + isEnabled + "\n")  // true
    });

    xit("should show if an element is focused", async () => {
        await browser.url("https://webdriver.io");

        const searchButton = await $(".DocSearch.DocSearch-Button");
        let isFocused = await searchButton.isFocused();
        console.log("\n\tIs search button focused before click: " + isFocused + "\n")  // false
        await browser.pause(1000);
        await searchButton.click();
        let isFocusedAfterClick = await searchButton.isFocused();
        console.log("\n\tIs search button focused after click: " + isFocusedAfterClick + "\n")  // true
        await browser.pause(1000);
    });

    xit("should show movement to element action", async () => {
        await browser.url("https://webdriver.io");

        const getStartedLink = await $(".footer__link-item[href='/docs/gettingstarted']");
        await browser.pause(1000);
        await getStartedLink.scrollIntoView();
        await browser.pause(1000);
        let footerDisplayedInViewport = await getStartedLink.isDisplayedInViewport();
        console.log("\n\tIs Footer displayed in Viewport: " + footerDisplayedInViewport + "\n");  // true
    });

    xit("should save screenshot", async () => {
        await browser.url("https://webdriver.io");

        const getStartedLink = await $(".footer__link-item[href='/docs/gettingstarted']");
        await getStartedLink.scrollIntoView();
        await browser.pause(2000);
        await getStartedLink.saveScreenshot('./screenshots/getStartedLinkScreenshot.png');
        await browser.saveScreenshot('./screenshots/footerViewScreenshot.png');
    });

    it("should switch to another window", async () => {
        await browser.url("https://webdriver.io");

        await browser.newWindow("https://google.com");
        await browser.pause(1000);

        await browser.switchWindow("https://webdriver.io");
        await browser.pause(1000);
    });
});
