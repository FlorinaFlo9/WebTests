//first test case
var HomePage = function() {
  var SignUp = element(by.xpath('//*[@id="anchor-menu"]/div/div[1]/ul[2]/li[3]/a')); 

  this.clickSignUp = function() {
    SignUp.click();
  };

  this.getHomePage = function() {
    browser.get('https://www.flytap.com');
  };
};

module.exports = new HomePage();