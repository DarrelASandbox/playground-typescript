// Type assertions with DOM
const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('todoinput') as HTMLInputElement;
const form = document.getElementById('todoform') as HTMLFormElement;

const submitHandler = (e: SubmitEvent) => {
  e.preventDefault();
  console.log('first');
};

form.addEventListener('submit', submitHandler);

// btn?.addEventListener('click', () => {
//   alert(input.value);
//   input.value = '';
// });
