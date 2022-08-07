import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, settodoValue] = React.useState('')

    const addTodoHandler = () => {
        const todo = {
            id: uuidv4(),
            text: todoValue,
            completed: false
        }
        dispatch(addTodo(todo))
        settodoValue('')
    }

    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                value={todoValue}
                placeholder='Type something...'
                onChange={(e)=> settodoValue(e.target.value)}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                onClick={()=> addTodoHandler()}
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
