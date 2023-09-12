import { createContext, useContext} from "react";
import { useReducer } from "react";
import { cartReducer } from "../reducer";


const cartInitialState = {
    cartList: [],
    total: 0,
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    function calculateTotal(cartList) {
        return cartList.reduce((acc, product) => acc + product.price, 0);
    }
    function addToCart(product){
        const updatedList = state.cartList.concat(product);
        const updatedTotal = calculateTotal(updatedList);
    
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }
    
    function removeFromCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal = calculateTotal(updatedList);
    
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }
    
    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }
    

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


export  const useCart = () => {
    const context = useContext(CartContext);

    if(context === undefined){
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}