import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
        setCart( [...cart, item] )
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const cantidadCart = () => {
        return cart.reduce((ac, prod) => ac + prod.cantidad, 0)
    }

    const totalCompra = () => {
        return cart.reduce((ac, prod) => ac + prod.cantidad * prod.price, 0)
    }

    return(
        <CartContext.Provider value={
            cart,
            agregarAlCarrito,
            isInCart,
            cantidadCart,
            totalCompra
        }>
            {children}
        </CartContext.Provider>
    )
}