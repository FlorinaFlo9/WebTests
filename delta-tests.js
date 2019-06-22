var page = require('./pages-delta');

describe('angularjs homepage todo list', function() {
  browser.ignoreSyncronization=true;
  
  it('should open flytap home page', function() {
    page.getDeltaHomePage();
    expect(browser.getTitle()).toEqual("Airline Tickets & Flights: Book Direct with Delta Air Lines - Official Site");  
  });
  
  it('should click on sign up button', function() {
      page.clickDeltaSignUp();
      expect(browser.getTitle()).toEqual("Join SkyMiles® Loyalty Program : Delta Air Lines");  
    });
  });