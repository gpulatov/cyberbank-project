require('../Utilities/CustomLocators.js');

var BankManagerPage = function() {
    this.addCustomerButton = element(by.ngClick('addCust()'));

}

module.exports = new BankManagerPage();