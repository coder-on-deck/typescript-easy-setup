/// <reference path="../typings/globals/angular-protractor/index.d.ts" />
/// <reference path="../typings/globals/jasmine/index.d.ts" />
/// <reference path="../typings/globals/selenium-webdriver/index.d.ts" />

export class SamplePage {
  public clickButton() {
    browser.get('http://localhost:4444/wd/hub')
    console.log('clicking')
  }
}

