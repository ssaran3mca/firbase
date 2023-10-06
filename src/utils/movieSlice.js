import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        addTrailerMovie: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addpopularMovie: (state, action) => {
            state.papularMOvie = action.payload;
        }
    },
})
export const { addNowPlayingMovie, addTrailerMovie, addpopularMovie } = movieSlice.actions;
export default movieSlice.reducer;   