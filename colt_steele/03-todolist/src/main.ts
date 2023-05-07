interface Todo {
  text: string;
  completed: boolean;
}

// Type assertions with DOM
const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('todoinput') as HTMLInputElement;
const form = document.getElementById('todoform') as HTMLFormElement;
const list = document.getElementById('todolist') as HTMLUListElement;

const readLocalStorage = (): Todo[] => {
  const todosJSON = localStorage.getItem('todos');
  return todosJSON === null ? [] : JSON.parse(todosJSON);
};

const saveToLocalStorage = () => localStorage.setItem('todos', JSON.stringify(todos));

const createTodo = (todo: Todo) => {
  const newListItem = document.createElement('li');
  const checkbox = document.createElement('input');

  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked;
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  newListItem.append(todo.text);
  newListItem.append(checkbox);
  list.append(newListItem);
};

const todos: Todo[] = readLocalStorage();
todos.forEach(createTodo);

const submitHandler = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = { text: input.value, completed: false };
  createTodo(newTodo);
  todos.push(newTodo);
  saveToLocalStorage();

  input.value = '';
};

form.addEventListener('submit', submitHandler);
