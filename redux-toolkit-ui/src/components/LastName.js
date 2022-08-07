import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {
    const name = useSelector((state) => state.user.LastName)
    return <div className='font-bold'>{name}</div>
}

export default LastName