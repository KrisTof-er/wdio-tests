class JobsPage {
    get jobSearchBtn() {
        return $(".btn-search");
    }
    get jumpBlock() {
        return $(".example");
    }

    async clickOnJobSearchBtn() {
        await this.jobSearchBtn.click();
    }
}

export default new JobsPage();
