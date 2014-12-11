Tinytest.add('Check kizzy function', function (test) {
    var cache = kizzy('user');
    test.equal(typeof(kizzy), "function");
    test.equal(typeof(cache.get), "function");
    test.equal(typeof(cache.set), "function");
});
