import { addTodo } from './todo.js';

const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

button.addEventListener('click', () => addTodo(input, list));

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo(input, list);
});
