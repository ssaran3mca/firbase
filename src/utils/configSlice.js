import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en',
    },
    reducers: {
        chnageLanguages: (state, action) => {
            state.lang = action.payload
        },
    },
})

export const { chnageLanguages } = configSlice.actions;
export default configSlice.reducer;