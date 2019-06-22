exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js', 'tap-tests.js', 'delta-tests.js']
  };