import { createSlice } from "@reduxjs/toolkit";
import itemData from "../../Components/ItemDetails";

const initialState = {
    cartHolder : []
};

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        // add to cart , remove form cart , increase qauntity , dec quantity , empty cart
        addToCart : (state,action) => {
            const itemId = action.payload.id;

            const foodItemIndex = state.cartHolder.findIndex( (item) => {
                if(item.id === itemId)
                    return true;
                else
                    return false;
            } );

            if(foodItemIndex >= 0 && foodItemIndex < state.cartHolder.length)
            {
                state.cartHolder[foodItemIndex].qnty += 1;
            }
            else
            {    
                const temp = action.payload;
                temp.qnty = 1;
                state.cartHolder.push(temp);
            }
        },

        removeFromCart : (state,action) => {
            //use splice
            const itemId = action.payload.id;

            const itemIndex = state.cartHolder.findIndex( (element) => {

                if(itemId === element.id)
                    return true
                else
                    return false

            } )

            state.cartHolder.splice(itemIndex,1);
        },

        clearCart : (state) => {
            state.cartHolder = [];
        },

        decreaseQuantity : (state,action) => {
            const itemId =  action.payload.id;

            const itemIndex = state.cartHolder.findIndex( (element) => {
                if(itemId === element.id)
                    return true
                else
                    return false
            })

            const quantity = state.cartHolder[itemIndex].qnty

            if(quantity == 1)
                state.cartHolder.splice(itemIndex,1);
            else if(quantity > 1)
                state.cartHolder[itemIndex].qnty -= 1;
        }
    }
});

export const {addToCart,removeFromCart,clearCart,decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer