import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    FirstName: "",
    LastName: ""
  }

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName(state, action){
            state.FirstName = action.payload

        },
        setLastName(state, action){
            state.LastName = action.payload

        }
    }
})

// Action creators are generated for each case reducer function
export const { setFirstName,setLastName } = UserSlice.actions

export default UserSlice.reducer