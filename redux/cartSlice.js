import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.total += action.payload.count;
            state.totalPrice += action.payload.price * action.payload.count;

            state.items.unshift(action.payload);
        },
        increaseItem(state, action) {
            const matchingItemIndex = state.items.findIndex(
                el => el.uuid === action.payload
            );

            if (matchingItemIndex === -1) return;

            state.total += 1;
            state.totalPrice += state.items[matchingItemIndex].price;
            state.items[matchingItemIndex].count += 1;
        },
        decreaseItem(state, action) {
            const matchingItemIndex = state.items.findIndex(
                el => el.uuid === action.payload
            );

            if (matchingItemIndex === -1) return;

            state.total -= 1;
            state.totalPrice -= state.items[matchingItemIndex].price;

            state.items[matchingItemIndex].count -= 1;

            if (state.items[matchingItemIndex].count === 0)
                state.items.splice(matchingItemIndex, 1);
        },
        clearItem(state) {
            state.items = [];
            state.total = 0;
            state.totalPrice = 0;
        },
    },
});

// actions
export const { addItem, increaseItem, decreaseItem, clearItem } =
    cartSlice.actions;

// selectors
export const cartItems = state => state.cart.items;
export const cartTotal = state => state.cart.total;
export const cartTotalPrice = state => state.cart.totalPrice;

const cartReducer = cartSlice.reducer;

export default cartReducer;
