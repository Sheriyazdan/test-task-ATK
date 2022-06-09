import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer