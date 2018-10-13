require('../Utilities/CustomLocators.js');
var HomePage = require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');

describe('Login', () => {
    beforeEach(function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });

    it('should have correct page title', () => {
        expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
    });

    it('should display home button', () => {
        expect(HomePage.homeButton.isDisplayed()).toBe(true);
        expect(HomePage.homeButton.getText()).toEqual('Home');
    });

    it('should display page header', () => {
        expect(HomePage.pageHeader.isDisplayed()).toBe(true);
        expect(HomePage.pageHeader.getText()).toEqual('XYZ Bank');
    });

    it('should display login option for Bank Manager', () => {
        expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
        expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
    });

    it('should stat at the homepage when Home Button is clicked', () => {
        $('button.home').click();
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
        expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
    });

    it('should login as Bank Manager', () => {
        HomePage.managerLoginButton.click();
        expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
    });

});