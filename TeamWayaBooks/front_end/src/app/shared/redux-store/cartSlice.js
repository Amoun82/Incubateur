import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state = initialState, action) => {
            let already = false;
            state.products.forEach((product) => {
                if (product.id === action.payload.id) {
                    product.quantity += parseInt(action.payload.quantity);
                    already = true;
                }
            });
            if (!already) state.products.push(action.payload);
        },
        removeCart: (state = initialState, action) => {
            state.products.splice(parseInt(action.payload), 1);
        },
        incrementProduct: (state = initialState, action) => {
            state.products[parseInt(action.payload)].quantity += 1;
        },
        decrementProduct: (state = initialState, action) => {
            state.products[parseInt(action.payload)].quantity -= 1;
        },
    },
});

export const { addCart, removeCart, incrementProduct, decrementProduct } =
    cartSlice.actions;

export const selectCart = (state) => state.cart.products;

export default cartSlice.reducer;
