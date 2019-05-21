var page = require('./pages');
describe('angularjs homepage todo list', function() {
  browser.ignoreSyncronization=true;
  it('should open flytap home page', function() {
    page.getHomePage();
    expect(browser.getTitle()).toEqual("FlyTAP - Official TAP Site | TAP Air Portugal | TAP Air Portugal");  
  });
  
  it('should click on sign up button', function() {
      page.clickSignUp();
      expect(browser.getTitle()).toEqual("Sign up - Benefits | TAP Air Portugal");  
    });
  });