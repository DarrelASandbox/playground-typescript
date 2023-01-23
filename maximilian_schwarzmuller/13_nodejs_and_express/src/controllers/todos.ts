import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text; // Type casting
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};

export { createTodo };
