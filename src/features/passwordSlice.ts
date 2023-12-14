import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
    input: string;
    isCorrect: boolean;
    message: string;
}

const initialState: PasswordState = {
    input: '',
    isCorrect: false,
    message: '',
};

const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setInput: (state, action: PayloadAction<string>) => {
            state.input = action.payload;
        },
        clearInput: (state) => {
            state.input = '';
        },
        setCorrect: (state, action: PayloadAction<boolean>) => {
            state.isCorrect = action.payload;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
});

export const { setInput, clearInput, setCorrect, setMessage } = passwordSlice.actions;
export const selectPassword = (state: { password: PasswordState }) => state.password;
export default passwordSlice.reducer;
