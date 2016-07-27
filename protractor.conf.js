exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/normalize.js','tests/testPage.spec.js']
};