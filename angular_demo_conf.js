
// Use all_tests_arr when executing all scripts.
all_tests_arr = [ 
    'spec_angular_demo_autocomplete.js', 
    'spec_angular_demo_button.js',
    'spec_angular_demo_checkbox.js',
    'spec_angular_demo_input.js', 
    'spec_angular_demo_radio_button.js',
    'spec_angular_demo_select.js'
];

// Use curr_test_arr when testing individual script.
curr_test_arr = [ 'spec_angular_demo_input.js' ];

exports.config = {


    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: curr_test_arr,
    //capabilities: {
    //    browserName: 'firefox'
    //}
    //multiCapabilities: [
    //    {
    //        browserName: 'firefox'
    //    },
    //    {
    //        browserName: 'chrome'
    //    }
    //]
};