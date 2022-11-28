"use strict";
console.log('from app.ts');
const clickHandler = (message) => console.log('Clicked! ' + message);
const button = document.querySelector('button');
button &&
    button.addEventListener('click', clickHandler.bind(null, 'bind: first param is not used & second cannot be `null`'));
