import { expect } from '@wdio/globals'

describe("Webdriverio main page", () => {
    it("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle();
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });
});
