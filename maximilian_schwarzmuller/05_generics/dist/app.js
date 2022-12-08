"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success!'), 1000);
});
promise.then((data) => data.split(''));
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ rubbish: [{ id: 1, item: 'something' }, { boolean: true }] }, { age: 30 });
console.log(mergeObj);
