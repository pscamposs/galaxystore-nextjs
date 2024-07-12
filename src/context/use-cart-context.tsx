import { Plugin } from "@/types/FilterTypes";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";

interface CartContextProps {
  plugins: Plugin[];
  addToCart: (plugin: Plugin) => void;
  removeFromCart: (plugin: Plugin) => void;
  clearCart: () => void;

  subTotalPrice: () => number;
  totalPrice: () => number;
  discountPrice: () => number;
}

export const CartContext = createContext({} as CartContextProps);

export const CartContexProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useLocalStorage<Plugin[]>("cartItems", []);

  const addToCart = (plugin: Plugin) => {
    if (containsPlugins(plugin)) return;
    setCartItems((prevPlugin: Plugin) => [...prevPlugin, plugin]);
  };

  const removeFromCart = (plugin: Plugin) => {
    let items = cartItems.filter((item) => item._id !== plugin._id);
    setCartItems(items);
  };
  const containsPlugins = (plugin: Plugin) => {
    return cartItems.filter((item) => item._id === plugin._id).length > 0;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (prev, current) => (prev + current?.price) as number,
      0
    );
  };

  const discountPrice = (): number => {
    return 0;
  };

  const subTotalPrice = (): number => {
    return totalPrice() - discountPrice();
  };

  return (
    <CartContext.Provider
      value={{
        plugins: cartItems,
        addToCart,
        removeFromCart,
        subTotalPrice,
        discountPrice,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
