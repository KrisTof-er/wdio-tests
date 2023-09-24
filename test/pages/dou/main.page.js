class MainPage {
    get MainURL() {
        return "https://dou.ua";
    }
    get forumBtn() {
        return $("a[href='https://dou.ua/forums/']");
    }
    get bandBtn() {
        return $("a[href='https://dou.ua/lenta/']");
    }
    get salariesBtn() {
        return $("a[href='https://jobs.dou.ua/salaries/']");
    }
    get gameDevBtn() {
        return $(".menu-site__gamedev");
    }
    get relocateBtn() {
        return $(".menu-site__relocate");
    }
    get jobsBtn() {
        return $("a[href='https://jobs.dou.ua/']");
    }
    get searchInput() {
        return $("#txtGlobalSearch");
    }

    async clickOnForumBtn() {
        await this.forumBtn.click();
    }
    async clickOnBandBtn() {
        await this.bandBtn.click();
    }
    async clickOnSalariesBtn() {
        await this.salariesBtn.click();
    }
    async clickOnGameDevBtn() {
        await this.gameDevBtn.click();
    }
    async clickOnRelocateBtn() {
        await this.relocateBtn.click();
    }
    async clickOnJobsBtn() {
        await this.jobsBtn.click();
    }
    async setSearchInput(value) {
        await this.searchInput.setValue(value);
    }
}

export default new MainPage()
