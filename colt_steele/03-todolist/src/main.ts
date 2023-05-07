// Type assertions with DOM
const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('todoinput') as HTMLInputElement;
const form = document.getElementById('todoform') as HTMLFormElement;
const list = document.getElementById('todolist') as HTMLUListElement;

const submitHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodoText = input.value;
  const newListItem = document.createElement('li');
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  newListItem.append(newTodoText);
  newListItem.append(checkbox);
  list.append(newListItem);

  input.value = '';
};

form.addEventListener('submit', submitHandler);
