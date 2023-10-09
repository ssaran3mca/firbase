import { configureStore } from '@reduxjs/toolkit'
import useReducer from './userSlice';
import movieReducer from './movieSlice'
import gptRedicer from './gptSlice';
import configReducer from './configSlice';
const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: movieReducer,
        gpt: gptRedicer,
        config: configReducer,
    },
});

export default appStore;