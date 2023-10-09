import { createSlice } from "@reduxjs/toolkit";

const gptSlicer = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})
export const { toggleGptSearchView } = gptSlicer.actions;
export default gptSlicer.reducer;