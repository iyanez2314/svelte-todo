import { writable, derived, readable } from "svelte/store";

export const todoList = writable([]);

export const doneList = writable([]);

export const todos = derived(todoList, ($todoList) => {
  return $todoList.filter((todo) => !todo.completed);
});

export const todoCount = derived(todoList, ($todoList) => {
  return $todoList.filter((todo) => !todo.completed).length;
});

export const totalDone = derived(doneList, ($doneList) => {
  return $doneList.length;
});
