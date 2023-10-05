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
        }
    },
})
export const { addNowPlayingMovie, addTrailerMovie } = movieSlice.actions;
export default movieSlice.reducer;   