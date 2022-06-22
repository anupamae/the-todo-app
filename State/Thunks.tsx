import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiDeleteItem, apiDeleteList, apiReadAllList, apiReadOneItem, apiReadOneList, apiWriteItem, apiWriteList } from "./Api";
import { ITodoItem, ITodoList } from "./State";

export const readAllListThunk = createAsyncThunk('todo/list/readAll', async () => {
    const resp = await apiReadAllList();
    return resp
})

export const readOneListThunk = createAsyncThunk('todo/list/readOne', async (listId: string) => {
    const resp = await apiReadOneList(listId);
    return resp
})

export const readOneItemThunk = createAsyncThunk('todo/item/readOne', async (arg: [listId: string, itemId: string]) => {
    const resp = await apiReadOneItem(arg[0], arg[1]);
    return resp
})

export const writeListThunk = createAsyncThunk('todo/list/write', async (list: ITodoList) => {
    const resp = await apiWriteList(list);
    return resp
})

export const writeItemThunk = createAsyncThunk('todo/item/write', async (item: ITodoItem) => {
    const resp = await apiWriteItem(item);
    return resp
})

export const deleteListThunk = createAsyncThunk('todo/list/delete', async (listId: string) => {
    const resp = await apiDeleteList(listId);
    return resp
})

export const deleteItemThunk = createAsyncThunk('todo/item/delete', async (arg: [listId: string, itemId: string]) => {
    const resp = await apiDeleteItem(arg[0], arg[1]);
    return resp
})
