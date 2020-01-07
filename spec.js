
describe('Enter name feature', function() {

    it('should enter name as Tom', function() {

        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Tom');
        
        var text_elem = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text_elem.getText()).toEqual('Hello Tom!');
    

    }); 
});

describe('free CRM title test', function() {

    it('should have a title', function() {

            browser.get('https://juliemr.github.io/protractor-demo/');
            expect(browser.getTitle()).toEqual('Super Calculator');

            element(by.model('first')).sendKeys('Selenium One');
            browser.driver.sleep(3000);
            element(by.model('first')).sendKeys('Selenium Two');
            browser.driver.sleep(3000);

    });

});

describe('something test case', function(){

    it('something', function() {
            browser.waitForAngularEnabled(false);
            browser.get('https://google.com');
            expect(browser.getTitle()).toEqual('Google');
            
            browser.driver.sleep(3000);
    });

});

describe('', function() {


});
