describe('multiple elements', function() {
    
    it('should add one and two', function() {

        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');

        element(by.id('gobutton')).click();

        // This produces warning
        // W/element - more than one element found for locator By(css selector, .ng-binding) - the first result will be used
        expect(element(by.className('ng-binding')).getText()).toEqual('3');

        // Hence by.xpath is used to locate specific h2 having that class.
        expect(element(by.xpath('//h2[@class = "ng-binding"]')).getText()).toEqual('3');
    });
});