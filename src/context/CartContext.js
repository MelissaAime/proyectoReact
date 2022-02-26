import { createContext, useState } from "react";
import { Fecha } from "../components/Fecha/Fecha";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart( [...cart, item] )
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const cantidadCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    // const totalCompra = () => {
    //     return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    // }

    const totalCompra = () => {
        return(
            <>
                {
                    Fecha === 4
                    ? cart.reduce((acc, prod) => acc + prod.cantidad * prod.price * 0.85, 0)
                    : cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
                }
            </>
        )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart( cart.filter( (prod) => prod.id !== id ) )
    }
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cantidadCart,
            totalCompra,
            clearCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}