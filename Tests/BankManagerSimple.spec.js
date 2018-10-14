require('../Utilities/CustomLocators.js');
var HomePage = require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomerPage.page.js');

describe('Bank Manager', () => {

    describe('Manager Login', () => {

        let EC = protractor.ExpectedConditions;

        beforeEach(function () {
            Base.navigateToHome();
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
            expect(BankManagerPage.addCustomerButton.getText()).toEqual('Add Customer');
        });

        it('should display options for Manager', () => {
            HomePage.managerLoginButton.click();
            expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.addCustomerButton.getText()).toEqual('Add Customer');
            expect(BankManagerPage.openAccountButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.openAccountButton.getText()).toEqual('Open Account');
            expect(BankManagerPage.customersButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.customersButton.getText()).toEqual('Customers');
        })

        it('should navigate back to homepage from Manager Login Page', () => {
            HomePage.managerLoginButton.click();
            BankManagerPage.homeButton.click();
            expect(HomePage.customerLoginButton.isDisplayed()).toBe(true);
            expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
        });

        /* I added this part

        it('should display form for Adding Customer', () => {
            HomePage.managerLoginButton.click();
            BankManagerPage.addCustomerButton.click();
            expect(BankManagerPage.customerFormFieldNames.getText()).toEqual(['First Name :', 'Last Name :', 'Post Code :']);
        });

        it('should list first name in the form', () => {
            HomePage.managerLoginButton.click();
            BankManagerPage.addCustomerButton.click();
            expect(BankManagerPage.customerFirstNameField.isDisplayed()).toBe(true);
            expect(BankManagerPage.customerFirstNameField.getAttribute('placeholder')).toEqual('First Name');

        });
        it('should verify new customer form field labels', () => {
            HomePage.managerLoginButton.click();
            BankManagerPage.addCustomerButton.click();
            expect(BankManagerPage.customerFormFieldNames.getText()).toEqual(['First Name :', 'Last Name :', 'Post Code :']);
        });
        it('should list First Name, Last Name, Zip code  labels ', () => {
            HomePage.managerLoginButton.click();
            BankManagerPage.addCustomerButton.click();
            expect(BankManagerPage.customerFirstNameLabel.isDisplayed()).toBe(true);
            expect(BankManagerPage.customerLastNameLabel.isDisplayed()).toBe(true);
            expect(BankManagerPage.customerPostCodeLabel.isDisplayed()).toBe(true);
        });

        it('should require First Name ', () => {
            HomePage.managerLoginButton.click();
            BankManagerPage.addCustomerButton.click();
            BankManagerPage.addNewCustomerButton.click();
            expect(BankManagerPage.customerFirstNameField.getAttribute('class')).toContain('ng-invalid-required');

            BankManagerPage.customerFirstNameField.sendKeys("Texas");
            BankManagerPage.addNewCustomerButton.click();
            expect(BankManagerPage.customerFirstNameField.getAttribute('class')).toContain('ng-valid-required');
            expect(BankManagerPage.customerLastNameField.getAttribute('class')).toContain('ng-invalid-required');
            BankManagerPage.customerLastNameField.sendKeys("Flower");
            BankManagerPage.addNewCustomerButton.click();
            expect(BankManagerPage.customerLastNameField.getAttribute('class')).toContain('ng-valid-required');
            expect(BankManagerPage.customerPostCodeField.getAttribute('class')).toContain('ng-invalid-required');
            BankManagerPage.customerPostCodeField.sendKeys(77498);
            expect(BankManagerPage.customerPostCodeField.getAttribute('class')).toContain('ng-valid-required');

        });

        it('should add a new customer', () => {
            HomePage.managerLoginButton.click();
            BankManagerPage.addCustomerButton.click();
            BankManagerPage.customerFirstNameField.sendKeys("Texas");
            BankManagerPage.customerLastNameField.sendKeys("Flower");
            BankManagerPage.customerPostCodeField.sendKeys(77498);
            BankManagerPage.addNewCustomerButton.click();
            browser.wait(EC.alertIsPresent(), 4000);
            let alert = browser.switchTo().alert();
            let alertText = alert.getText();
            expect(alertText).toContain("Customer added successfully with customer id");
            alert.accept();
        });

        */


    });

    fdescribe('Adding a customer', () => {
        beforeAll(function () {
            Base.navigateToHome();
            HomePage.managerLoginButton.click();
            AddCustomerPage.goToAddCustomer();
        });

        it('should display form for Adding Customer', () => {
            expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
            expect(AddCustomerPage.formLabels.count()).toEqual(3);
        });

        it('should list all the labels', () => {
            expect(AddCustomerPage.formLabels.get(0).getText()).toEqual('First Name :');
            expect(AddCustomerPage.formLabels.get(1).getText()).toEqual('Last Name :');
            expect(AddCustomerPage.formLabels.get(2).getText()).toEqual('Post Code :');

        });

        it('should require firstname', () => {
            expect(AddCustomerPage.formRequiredFields.get(0)
                .getAttribute('required')).toEqual('true');
        });

        it('should add customer', () => {
            AddCustomerPage.firtNameInputBox.sendKeys('Jeff');
            AddCustomerPage.lastNameInputBox.sendKeys('Bezos');
            AddCustomerPage.postalCodeInputBox.sendKeys('224455');

        });

    });

});