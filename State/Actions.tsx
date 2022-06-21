import { createAction } from '@reduxjs/toolkit'

export const createTodoListAction = createAction<string>('todo/list/create')
export const deleteTodoListAction = createAction<string>('todo/list/delete')
export const insertTodoItemAction = createAction<[listId: string, title: string]>('todo/item/insert')
export const removeTodoItemAction = createAction<[listId: string, itemId: string]>('todo/item/remove')
export const toggleTodoDoneAction = createAction<[listId: string, itemId: string]>('todo/item/toggle')
