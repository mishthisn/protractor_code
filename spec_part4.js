describe('get list of elements', function() {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.xpath('//h2[@class = "ng-binding"]'));
    var history = element.all(by.repeater('result in memory'));

    beforeEach(function() {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    function add(a,b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    it('should check the history', function() {

        add(1,2);
        add(2,2);
        add(1,3);

        expect(history.count()).toEqual(3);

        add(5,6);
        add(7,6);

        expect(history.count()).toEqual(5);


    });

});