require('../Utilities/CustomLocators.js');
var BankMaganerPage = require('./BankManager.page');

var AddCustomerPage = function () {
    this.formLabels = $$('.form-group>label');
    this.firtNameInputBox = element(by.model('fName'));
    this.lastNameInputBox = element(by.model('lName'));
    this.postalCodeInputBox = element(by.model('postCd'));
    this.formRequiredFields = element.all(by.css('input:required'));
    this.formAddCustomerButton = $('.btn.btn-default');
    this.customerForm = element(by.name('myForm'));

    this.goToAddCustomer = function () {
        BankMaganerPage.addCustomerButton.click();
    };
};

module.exports = new AddCustomerPage();