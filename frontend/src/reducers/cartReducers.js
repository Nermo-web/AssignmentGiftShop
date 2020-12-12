import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: [] }, action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map( x => x.product === existItem.product? item: x ),
                };
            } else{
                return{ ...state, cartItems: [...state.cartItems, item]};
            }
        case CART_REMOVE_ITEM:
            return { ...state, cartItems: state.cartItems.filter( x => x.product !== action.payload),
                //filtering out the product that its ID is equal to action.payload
                // at cartAction we set payload to productId which will be deleted from cart
                //updating redux store and removing the item from cart
            };
            default:
                return state;
    }
};