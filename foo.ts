const testpath = './test';
import(testpath).then(contents => {
    console.log('Hello', contents);
});