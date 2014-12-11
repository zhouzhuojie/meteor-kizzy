Package.describe({
  summary: "kizzy, a light-weight, cross-browser, JavaScript local storage utility.",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-kizzy.git",
  name: "rexzh0u:kizzy"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery');
  api.addFiles('lib/kizzy/kizzy.js', 'client');
  api.addFiles('lib/main.js', 'client');
  api.export('kizzy');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('rexzh0u:kizzy');
  api.addFiles('rexzh0u:kizzy-tests.js', 'client');
});
