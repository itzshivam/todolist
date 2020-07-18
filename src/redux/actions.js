import { ADD_TODO } from "./actionTypes";

var todoId = 0;

export function addTodo(content) {
    return {
        type: ADD_TODO,
        payload: {
            id: todoId++,
            content
        }
    }
}