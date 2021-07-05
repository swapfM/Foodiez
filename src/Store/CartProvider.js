import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount:0
}


const cartReducer = (state, action) =>{

    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.type.price * action.item.amount;
        return{items: updatedItems,
        totalAmount: updatedTotalAmount}
    }
    return defaultCartState;
};


const CartProvider = props => {   

   const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addItemToCart = item =>{

        dispatchCartAction({type: 'ADD_ITEM', item: item});
    };

    const removeItemFromCart = id =>{};

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }       
    
     
    return <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;