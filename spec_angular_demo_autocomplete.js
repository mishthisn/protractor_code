
describe('Angular Demo AutoComplete', function() {

    beforeEach(function() {
        browser.get('https://material.angularjs.org/latest/demo/autocomplete');
    });

    it('should show states starting with C', function() {

        element(by.xpath('//input[@type = "search" and contains(@id,"input-")]')).sendKeys('C');

        /* Protractor .repeater does not match md-virtual-repeat 
         * md stands for material design
         * See https://github.com/angular/protractor/issues/2804
         * Hence matched it by xpath
         */
        // var statesAutocomplete = element.all(by.xpath('item in $mdAutocompleteCtrl.matches'));
        var statesAutocomplete = element.all(by.xpath('//li[@md-virtual-repeat = "item in $mdAutocompleteCtrl.matches"]'));

        // Should display 3 states California Colorado Connecticut.
        expect(statesAutocomplete.count()).toEqual(3);

        expect(statesAutocomplete.getText()).toEqual(['California', 'Colorado', 'Connecticut']);

    });

    it('should not show any states starting with B', function() {

        element(by.xpath('//input[@type = "search" and contains(@id,"input-")]')).sendKeys('B');

        var statesAutocomplete = element.all(by.xpath('//li[@md-virtual-repeat = "item in $mdAutocompleteCtrl.matches"]'));

        // Should not display any states
        expect(statesAutocomplete.count()).toEqual(0);

    });

    it('should not show all states when search box is cleared', function() {

        search_box = element(by.xpath('//input[@type = "search" and contains(@id,"input-")]'));
        search_box.sendKeys('C');
        search_box.sendKeys(protractor.Key.BACK_SPACE);

        var statesAutocomplete = element.all(by.xpath('//li[@md-virtual-repeat = "item in $mdAutocompleteCtrl.matches"]'));

        // Should display all 50 states
        // It actually shows only 8 states.
        // TODO: scroll div to get all results.
        expect(statesAutocomplete.count()).toEqual(50);

    });

});