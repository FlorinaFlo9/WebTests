var HomePage = function() {
    var login=element(by.xpath('//*[@id="js-tlog-modal-full-login"]'));
    var userName=element(by.xpath('//*[@id="login-user-account-modal"]'));
    var password=element(by.xpath('//*[@id="login-pass-account-modal"]'));
    var loginPopup=element(by.xpath('//*[@id="login-save-account-submit-modal"]/span/span'));

    this.clickLogin = function() {
        login.click();
    };

    this.getHomePage = function() {
        browser.get('https://www.flytap.com');
    };

    this.setUsername = function() {
        userName.sendKeys('testtttt');
    }

    this.setPassword = function() {
        password.sendKeys('testtt2');
    }

    this.clickLoginPopup = function() {
        loginPopup.click();
    }
};

module.exports = new HomePage();