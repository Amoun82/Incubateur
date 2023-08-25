import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from './authenticationSlice';
import cartReducer from './cartSlice';
import searchWordReducer from './searchWordSlice';

/**
 * To configure the store redux.
 *
 * @author Peter Mollet
 */
export const store = configureStore({
    reducer: {
        auth: authenticationReducer,
        search: searchWordReducer,
        cart: cartReducer,
    },
});
