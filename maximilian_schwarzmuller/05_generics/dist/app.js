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
console.log('mergeObj:');
console.log(mergeObj);
function countAndDescribe(element) {
    let description = 'Got no value';
    if (element.length > 0)
        description = 'Got 1 element.';
    else if (element.length > 1)
        description = 'Got ' + element.length + ' elements.';
    return [element, description];
}
console.log('countAndDescribe: ' + countAndDescribe('Hi, there!'));
console.log('countAndDescribe: ' + countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log('extractAndConvert: ' + extractAndConvert({ name: 'Max' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Mad');
textStorage.addItem('Max');
textStorage.removeItem('Mad');
console.log('textStorage: ' + textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
const maeObj = { name: 'Mae' };
objStorage.addItem(maeObj);
objStorage.addItem({ name: 'Mad' });
objStorage.addItem({ name: 'Max' });
objStorage.removeItem({ name: 'Mad' });
objStorage.removeItem(maeObj);
console.log('objStorage:');
console.log(objStorage.getItems());
