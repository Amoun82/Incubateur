import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    words: '',
};

export const searchWordSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addWordSearch: (state = initialState, action) => {
            state.words = action.payload;
        },
    },
});

export const { addWordSearch } = searchWordSlice.actions;

export const selectWords = (state) => state.search.words;

export default searchWordSlice.reducer;
