// Type assertions with DOM
const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('todoinput') as HTMLInputElement;

// Avoid using Non-null assertion operator `!`
// as it can lead to potential runtime errors
btn?.addEventListener('click', () => {
  alert(input.value);
  input.value = '';
});
