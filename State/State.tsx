export interface ITodoItem {
  id: string,
  title: string,
  completed: boolean
}

export interface ITodoList {
  id: string,
  name: string,
  list: ITodoItem[]
}

export interface ITodoState {
  [listId: string]: ITodoList
}

const localStorageKey = 'todoList';

export const loadState = (): ITodoState => {
  try {
    const todoState = JSON.parse(localStorage.getItem(localStorageKey) || '') as ITodoState
    if (todoState) {
      return todoState
    }
  } catch (_) {
  }
  return {};
}

export const saveState = (todoState: ITodoState) => {
  localStorage.setItem(localStorageKey, JSON.stringify(todoState));
}
