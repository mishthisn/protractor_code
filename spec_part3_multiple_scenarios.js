describe('Multiple Scenarios', function() {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.xpath('//h2[@class = "ng-binding"]'));

    beforeEach(function() {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    // TC1
    it('should have title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    // TC2
    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();

        expect(result.getText()).toEqual('3');
    });

    // TC3
    it('should add four and six', function() {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);
        goButton.click();

        expect(result.getText()).toEqual('10');
    });

    // TC4
    it('should read value from an input', function() {
        firstNumber.sendKeys(5);
        expect(firstNumber.getAttribute('value')).toEqual('5');
    });

});