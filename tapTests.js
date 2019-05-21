var page = require('./pages');
describe('angularjs homepage todo list', function() {
  browser.ignoreSyncronization=true;
  it('should open flytap home page', function() {
    page.getHomePage();
    expect(browser.getTitle()).toEqual("FlyTAP - Official TAP Site | TAP Air Portugal | TAP Air Portugal");  
  });

  it('should go to sign in', function() {
      page.clickLogin();
      page.setUsername();
      page.setPassword();   
      page.clickLoginPopup();
      });
  });