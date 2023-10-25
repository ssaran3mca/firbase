import { createSlice } from "@reduxjs/toolkit";

const gptSlicer = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResult: null,
        movieName: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addgptMoviesResult: (state, actions) => {
            const { movieName, movieResult } = actions.payload;
            state.movieName = movieName;
            state.movieResult = movieResult;
        }
    }
})
export const { toggleGptSearchView, addgptMoviesResult } = gptSlicer.actions;
export default gptSlicer.reducer;