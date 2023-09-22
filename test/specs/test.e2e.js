import { expect } from '@wdio/globals'

describe("Webdriverio main page", () => {
    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle();
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    it("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username");
        await input.addValue("hello");
        await browser.pause(2000);

        await input.addValue(123);
        await browser.pause(2000);

        await expect(input).toHaveValue("hello123")
    });
});
