import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { togleCompletedTodo } from '../features/todo/todoSlice'

const TodoItem = (todo) => {
    const dispatch = useDispatch()
    const togletodoHandler = (id) => {
        dispatch(togleCompletedTodo(id))

    }

    console.log('Внутри', todo);
    return (
        <div className='flex justify-between items-center my-2'>
            <div onClick={()=> togletodoHandler(todo.value.completed)} 
            className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                {todo.value.completed}
            </div>
            <div className='one'>
                {todo.value.text}
            </div>
            <div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    )
}

export default TodoItem


