import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'На главную',
}

export const linkSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setLink: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLink } = linkSlice.actions

export default linkSlice.reducer