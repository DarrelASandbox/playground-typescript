console.log('from app.ts');

const clickHandler = (message: string) => console.log('Clicked! ' + message);

// const button = document.querySelector('button')!;
// button.addEventListener('click', () => console.log('Clicked!'));

// Alternative option if we do not use the `!` to tell TS there will be a button
const button = document.querySelector('button');
button &&
  button.addEventListener(
    'click',
    clickHandler.bind(null, 'bind: first param is not used & second cannot be `null`')
  );
