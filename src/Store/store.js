import { create } from "zustand";

const useShoppingCartStore = create((set) => ({
    itemsList: [],
    totalQuantity: 0,
    totalShoppingPrice: 0,
    showShoppingCart: false,

    setShowShoppingCart: () => set((state) => ({
        showShoppingCart: !state.showShoppingCart
    })),

    addToCart: (item) => set((state) => {
        const newItem = { ...item, quantity: 1 };
        const existingItem = state.itemsList.find((i) => 
            i.id === newItem.id && i.color === newItem.color && i.size === newItem.size
        );

        if (existingItem) {
            return {
                itemsList: state.itemsList.map((i) =>
                    i.id === newItem.id && i.color === newItem.color && i.size === newItem.size 
                        ? { ...i, quantity: i.quantity + 1, totalPrice: i.totalPrice + parseFloat(newItem.price) } 
                        : i
                ),
                totalQuantity: state.totalQuantity + 1,
                totalShoppingPrice: state.totalShoppingPrice + parseFloat(newItem.price)
            };
        } else {
            return {
                itemsList: [...state.itemsList, { ...newItem, totalPrice: parseFloat(newItem.price) }],
                totalQuantity: state.totalQuantity + 1,
                totalShoppingPrice: state.totalShoppingPrice + parseFloat(newItem.price)
            };
        }
    }),

    removeFromCart: (id, color, size, price) => set((state) => {
        const existingItem = state.itemsList.find((item) => 
            item.id === id && item.color === color && item.size === size
        );

        if (existingItem) {
            if (existingItem.quantity === 1) {
                return {
                    itemsList: state.itemsList.filter((item) => 
                        !(item.id === id && item.color === color && item.size === size)
                    ),
                    totalQuantity: state.totalQuantity - 1,
                    totalShoppingPrice: state.totalShoppingPrice - parseFloat(price)
                };
            } else {
                return {
                    itemsList: state.itemsList.map((item) =>
                        item.id === id && item.color === color && item.size === size 
                            ? { ...item, quantity: item.quantity - 1, totalPrice: parseFloat(item.totalPrice) - parseFloat(item.price) } 
                            : item
                    ),
                    totalQuantity: state.totalQuantity - 1,
                    totalShoppingPrice: state.totalShoppingPrice - parseFloat(price)
                };
            }
        }
        return state;
    }),
}));

export default useShoppingCartStore;
