import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from '../features/passwordSlice';

export const store = configureStore({
    reducer: {
        password: passwordReducer,
    },
});
