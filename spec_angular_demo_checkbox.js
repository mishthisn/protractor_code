
describe('Angular Demo Checkbox', function() {

    beforeEach(function() {
        browser.get('https://material.angularjs.org/latest/demo/checkbox');
    });

    it('should show all types of checkboxes', function() {

        // First 5 checkboxes have ng-model of data.cb1 to data.cb5
        for(i = 1; i <= 5; i++) {
            chkObj = element(by.model('data.cb' + i));
            expect(chkObj.isDisplayed()).toBe(true);
        }

        // Last two checkboxes do not have ng-model attribute.
        // Look them up by class
        chkObj = element(by.className('md-primary md-indeterminate'));
        expect(chkObj.isDisplayed()).toBe(true);

        chkObj = element(by.xpath('//md-checkbox[@class = "md-primary md-indeterminate" and @ng-disabled = "true"]'))
        expect(chkObj.isDisplayed()).toBe(true);

    });

});