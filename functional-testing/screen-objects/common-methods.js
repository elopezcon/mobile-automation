export default class CommonMethods {
    async dragAndDrop (startElement, finalElement) {
        await TouchAction().press(startElement).moveTo(finalElement).release();
    };
    
    async tapOnElement(element) {
        await this.waitForElementDisplayed(element);
        await element.click();
    };

    async sendText(element, text) {
        await this.waitForElementDisplayed(element);
        await element.setValue(text);
    };
    
    async waitForElementDisplayed(element, timeOut = 25000) {
        await element.waitForDisplayed({ timeout: timeOut });
    };
};