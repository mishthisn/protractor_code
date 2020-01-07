
describe('Angular Demo Button', function() {

    beforeEach(function() {
        browser.get('https://material.angularjs.org/latest/demo/button');
    });

    it('should show all types of button', function() {

        var buttonXPaths = [
            "//button[@class = 'md-button md-ink-ripple' and . = 'Button']",
            "//button[@class = 'md-primary md-button' and @md-no-ink]",
            "//button[@class = 'md-primary md-button md-ink-ripple' and . = 'Disabled']",
            "//button[@class = 'md-warn md-button md-ink-ripple' and . = 'Warn']",
            "//button[@class = 'md-raised md-button md-ink-ripple' and . = 'Button']",
            "//button[@class = 'md-raised md-primary md-button md-ink-ripple' and . = 'Primary']",
            "//button[@class = 'md-raised md-primary md-button md-ink-ripple' and . = 'Disabled']",
            "//button[@class = 'md-raised md-warn md-button md-ink-ripple' and . = 'Warn']",
            "//button[@class = 'md-fab md-button md-ink-ripple' and @aria-label = 'Eat cake']",
            "//button[@class = 'md-fab md-primary md-button md-ink-ripple' and @aria-label = 'Use Android']",
            "//button[@class = 'md-fab md-button md-ink-ripple' and @aria-label = 'Comment']",
            "//button[@class = 'md-fab md-primary md-hue-2 md-button md-ink-ripple' and @aria-label = 'Profile']",
            "//button[@class = 'md-fab md-mini md-button md-ink-ripple' and @aria-label = 'Eat cake']",
            "//button[@class = 'md-fab md-mini md-primary md-button md-ink-ripple' and @aria-label = 'Use Android']",
            "//a[@class = 'md-button md-ink-ripple' and . = 'Default Link']",
            "//a[@class = 'md-primary md-button md-ink-ripple' and contains(.,'Primary Link')]",
            "//button[@class = 'md-button md-ink-ripple' and . = 'Default Button']",
            "//button[@class = 'md-primary md-hue-1 md-button md-ink-ripple' and . = 'Primary Hue 1']",
            "//button[@class = 'md-warn md-raised md-hue-2 md-button md-ink-ripple' and . = 'Warn Hue 2']",
            "//button[@class = 'md-accent md-button md-ink-ripple' and . = 'Accent']",
            "//button[@class = 'md-accent md-raised md-hue-1 md-button md-ink-ripple' and . = 'Accent Hue 1']",
            "//button[@class = 'md-icon-button md-primary md-button md-ink-ripple' and @aria-label = 'Settings']",
            "//button[@class = 'md-icon-button md-accent md-button md-ink-ripple' and @aria-label = 'Favorite']",
            "//button[@class = 'md-icon-button md-button md-ink-ripple' and @aria-label = 'More']",
            "//a[@class = 'md-icon-button launch md-button md-ink-ripple' and @title = 'Launch Google.com in new window']"
        ];

        // Note 'of' in 'for' loop
        // https://www.w3schools.com/js/js_loop_for.asp
        for(btnXPath of buttonXPaths) {
            btnObj = element(by.xpath(btnXPath));
            expect(btnObj.isDisplayed()).toBe(true);
        }

    });

});