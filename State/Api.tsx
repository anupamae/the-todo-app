import { ITodoItem, ITodoList, ITodoStateData } from "./State"

export const apiReadAllList = async (): Promise<ITodoStateData> => {
    // TODO:

    return {}
}

export const apiReadOneList = async (listId: string): Promise<ITodoList | undefined> => {
    // TODO:

    return undefined
}

export const apiReadOneItem = async (listId: string, itemId: string): Promise<ITodoItem | undefined> => {
    // TODO:

    return undefined
}

export const apiWriteList = async (list: ITodoList): Promise<boolean> => {
    // TODO:

    return false
}

export const apiWriteItem = async (item: ITodoItem): Promise<boolean> => {
    // TODO:

    return false
}

export const apiDeleteList = async (listId: string): Promise<boolean> => {
    // TODO:

    return false
}

export const apiDeleteItem = async (listId: string, itemId: string): Promise<boolean> => {
    // TODO:

    return false
}
