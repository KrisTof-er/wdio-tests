class GameDevPage {
    get companyGameDevsRateLink() {
        return $("//*[text()='Рейтинг найбільших геймдев-компаній']");
    }
    get topGamesRateLink() {
        return $("//*[text()='Топ ігор місяця']");
    }
    get topRatesPageTitle() {
        return $("//*[@class='b-subsite-posts']/h1");
    }

    async clickOnCompanyGameDevsRateLink() {
        await this.companyGameDevsRateLink.click();
    }
    async clickOnTopGamesRateLink() {
        await this.topGamesRateLink.click();
    }
}

export default new GameDevPage()
