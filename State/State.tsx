export interface ITodoItem {
  id: string,
  listId: string,
  title: string,
  completed: boolean
}

export interface ITodoList {
  id: string,
  name: string,
  list: ITodoItem[]
}

export interface ITodoStateData {
  [key: string]: ITodoList
}

export interface ITodoState {
  status: 'idle' | 'loading' | 'failed',
  data: ITodoStateData
}

const localStorageKey = 'todoList';

export const loadStateData = (): ITodoStateData => {
  try {
    const data = JSON.parse(localStorage.getItem(localStorageKey) || '') as ITodoStateData;
    if (data) {
      return data;
    }
  } catch (_) {
  }
  return {}
}

export const saveStateData = (data: ITodoStateData) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

const initialState: ITodoState = {
  status: 'idle',
  data: loadStateData()
}

export default initialState
