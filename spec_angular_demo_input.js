
describe('Angular Demo Input', function() {

    beforeEach(function() {
        browser.get('https://material.angularjs.org/latest/demo/input');
    });

    it('should show all types of input controls', function() {

        userTitleInput = element(by.model('user.title'));
        expect(userTitleInput.isDisplayed()).toBe(true);

        userEmailInput = element(by.model('user.email'));
        expect(userEmailInput.isDisplayed()).toBe(true);

    });

});