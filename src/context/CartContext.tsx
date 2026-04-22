import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);


export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<any[]>([]);
    const localstorageName = "cartItems"

    const addToCart = (product: any) => {
        const exits = cart.find((elem: { id: number }) => elem?.id === product?.id);
        if (exits) {
            setCart(cart)
        } else {
            setCart((prev) => [...prev, product])
        }
    };

    const increaseQty = (id: number) => {
        console.log(id)
        const findProduct = cart.find((elem: { id: number }) => elem.id === id);
        if (findProduct) {
            setCart((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            );
        }

    };

    const decreaseQty = (id: number) => {
        setCart((prev) =>
            prev
                .map((item) => {
                    if (item.id === id) {
                        const newQty = (item.quantity || 1) - 1;

                        if (newQty <= 0) {
                            return null; // mark for removal
                        }

                        return { ...item, quantity: newQty };
                    }

                    return item;
                })
                .filter(Boolean) // remove only null items
        );
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    useEffect(() => {
        const getData = localStorage.getItem(localstorageName);
        if (getData) {
            setCart(JSON.parse(getData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(localstorageName, JSON.stringify(cart));
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};