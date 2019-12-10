var testpath = './test';
Promise.resolve().then(function () { return require(testpath); }).then(function (contents) {
    console.log('Hello', contents);
});
