exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['dist/tests/normalize.js','dist/tests/testPage.spec.js'],
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  }
};