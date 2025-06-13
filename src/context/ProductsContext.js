import { createContext, useState } from "react";

export const ProductsContext = createContext();

const types = {
    cart: "cart",
    favs: "favs",
};

export function ProductsContextProvider({ children }) {
    const [productLists, setProductLists] = useState({
        products: [],
        cart: [],
        favs: [],
    });

    const handleInitProducts = (products) => {
        setProductLists(prev => ({
            ...prev,
            products,
        }));
    }

    const handleClear = (type) => {
        setProductLists(prev => ({
            ...prev,
            [type]: [],
        }));
    }

    const handleAdd = (type, item) => {
        setProductLists(prev => ({
            ...prev,
            [type]: [...prev[type], item],
        }));
    }

    const handleUpdate = (type, itemUpdated) => {
        let newList = productLists[type].map((product) => {
            if (product.id === itemUpdated.id) {
                return { ...itemUpdated };
            }
            return product;
        });

        setProductLists(prev => ({
            ...prev,
            [type]: [...newList],
        }));
    }

    const handleRemove = (type, id) => {
        let newList = productLists[type].filter(product => product.id !== id);
        setProductLists(prev => ({
            ...prev,
            [type]: [...newList],
        }));
    }

    let totalPrice = productLists.cart.reduce((prev, product) => {
        let total = product.price;
        if (product.quantity > 1) {
            total = (product.price * product.quantity);
        }
        return (prev + total);
    }, 0);
    totalPrice = parseFloat(totalPrice).toFixed(2);

    return (
        <ProductsContext.Provider value={{
            types,
            totalPrice,
            products: productLists.products,
            cart: productLists.cart,
            favs: productLists.favs,
            handleInitProducts,
            handleClear,
            handleAdd,
            handleUpdate,
            handleRemove,
        }}
        >
            {children}
        </ProductsContext.Provider>
    );
}