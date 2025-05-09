import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart" ,

    initialState : { 
        cartItems: [],
        totalQuantity : 0 ,
        totalPrice : 0,
    },


    reducers : {
        addToCart : (state,action)=>{
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item._id === newItem._id
            );

            if(existingItemIndex === -1){
                state.cartItems.push({
                    ...newItem,
                    quantity : newItem.quantity,
                    totalItemPrice : newItem.price,
                });
            }else{
                state.cartItems[existingItemIndex].quantity += newItem.quantity ; 
                state.cartItems[existingItemIndex].totalItemPrice += newItem.price * newItem.Quantity;
            }
            state.totalQuantity += newItem.quantity;
            state.totalPrice = Number
            ( state.totalPrice + newItem.price *newItem.quantity.toFixed(2) );
        },


 
        removeFromCart : (state,action) => { 
            const itemToRemove =action.payload ;
            const existingItemIndex = state.cartItems.findIndex((item) => item.id === itemToRemove._id);
            if(existingItemIndex === -1 ) return;

            const existingItem = state.cartItems[existingItemIndex];
            existingItem.Quantity -= itemToRemove.quantity ;
            existingItem.totalItemPrice -= itemToRemove.price = itemToRemove.price * itemToRemove.quantity;
            state.totalQuantity -= itemToRemove.quantity ; 
            state.totalPrice = Number(
                (state.totalPrice - itemToRemove.price * itemToRemove.quantity
            ).toFixed(2)
        );

        if(existingItem.quantity <= 0){
            state.cartItems = state.cartItems.filter(item => item._id !== itemToRemove._id);
        }
        
        },

        emptyCart : (state) => {
            state.cartItems =[];
            state.totalQuantity =0;
            state.totalItemPrice = 0;
        },
    },
});


export const { addtoCart , removeFromCart , emptyCart }  = cartSlice.actions ;
export default cartSlice.reducer ; 