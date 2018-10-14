require('../Utilities/CustomLocators.js');

var HomePage = function () {
    this.homeButton = $('button.home');
    this.pageHeader = $('.mainHeading');
    this.managerLoginButton = element(by.ngClick('manager()'));
    this.customerLoginButton = element(by.ngClick('customer()'));
    
};

module.exports = new HomePage();