import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        togleCompletedTodo(state, action) {
            const togleTodo = state.todos.find((todo) => todo.id === action.payload)
            togleTodo.comleted = !togleTodo.comleted
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTodo, togleCompletedTodo } = todoSlice.actions

export default todoSlice.reducer