describe('Angular Demo Radio Button', function() {

    beforeEach(function() {
        browser.get('https://material.angularjs.org/latest/demo/radioButton');

        // Find span that shows "Selected Value"
        // This locator chain returns 3 "Selected Value" span 
        // since all are child of a single div
        selValSpans = element(by.css('.demo-content.radioDemo1.ng-scope'))
                      .all(by.tagName('p'))
                      .all(by.tagName('span'));
    });

    it('should show all types of radio buttons', function() {

        // Expected Text for each radio button.
        var firstGrpExpText = [ 'Apple', 'Banana', 'Mango'];

        firstGroupParent = element(by.model('data.group1'));

        // Find all radion buttons under data.group1
        firstGrpRadioButtons = firstGroupParent.all(by.tagName('md-radio-button'));

        expect(firstGrpRadioButtons.count()).toEqual(3);

        firstGrpRadioButtons.each(function(element, index) {

            // Check if those are equal to Apple Banana and Mango.
            expect(element.getText()).toEqual(firstGrpExpText[index]);

            // Click radio button.
            element.click();

            // Make sure "Selected Value" span shows clicked radio button value
            // selValSpans.get(0) is first span in the group.
            expect(selValSpans.get(0).getText()).toEqual(firstGrpExpText[index]);
        });

        // Check second group.
        // All radio buttons in second group are rendered using ng-repeat
        secondGrpRadioButtons = element.all(by.repeater('d in radioData'));
        secondGrpExpText = [ '1', '2', '3', '4' ];

        secondGrpRadioButtons.each(function(element, index) {

            if (index == 1) {
                // Second radio button has random text appended to it.
                // So mach it using regular expression.
                expect(element.getText()).toMatch(/^2/);
            } else {
                expect(element.getText()).toEqual(secondGrpExpText[index]);
            }

            // Third radio button is disabled.
            if (index == 2) {
                element.getText().then(function(text) {console.log(text)});
                // TODO: This is not working.
                // isEnabled() returns true here!
                //expect(element.isEnabled()).toBe(false);
            }

        });

        // Click on Add button
        addButton = element(by.xpath('//button[. = "Add"]'));
        addButton.click();

        // Get elements again.
        secondGrpRadioButtons = element.all(by.repeater('d in radioData'));
        // Make sure count increased by 1.
        expect(secondGrpRadioButtons.count()).toEqual(5);

        // Click on Remove button
        removeButton = element(by.xpath('//button[. = "Remove"]'));
        removeButton.click();

        // Get elements again.
        secondGrpRadioButtons = element.all(by.repeater('d in radioData'));
        // Make sure count is lower by 1.
        expect(secondGrpRadioButtons.count()).toEqual(4);

    });

});