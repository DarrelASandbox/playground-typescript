interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

// Type assertions with DOM
const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('todoinput') as HTMLInputElement;
const form = document.getElementById('todoform') as HTMLFormElement;
const list = document.getElementById('todolist') as HTMLUListElement;

const submitHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = { text: input.value, completed: false };
  createTodo(newTodo);
  todos.push(newTodo);
  input.value = '';

  console.log(todos);
};

const createTodo = (todo: Todo) => {
  const newListItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newListItem.append(todo.text);
  newListItem.append(checkbox);
  list.append(newListItem);
};

form.addEventListener('submit', submitHandler);
