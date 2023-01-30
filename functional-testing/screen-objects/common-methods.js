export default class CommonMethods {
    async dragAndDrop (startElement, finalElement) {
        await this.waitForElementDisplayed(startElement);
        const firstElemCoord = await startElement.getLocation();
        const secondElemCoord = await finalElement.getLocation();
        await driver.touchPerform([
            { action: 'press', options: { x: firstElemCoord.x,  y: firstElemCoord.y }},
            { action: 'wait', options: { ms: 500 }},
            { action: 'moveTo', options: { x: secondElemCoord.x, y: secondElemCoord.y }},
            { action: 'wait', options: { ms: 500 }},
            { action: 'release' }
            ]);
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
        await element.waitForDisplayed({ timeout: 25000 });
    };
};