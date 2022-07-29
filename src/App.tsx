import { useState } from "react";
import { database } from "./database/products";
// Component
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { MainList } from "./components/MainList";
import { Footer } from "./components/Footer";
//Style
import { Wrapper } from "./css/App.styles";
// Interface
import { ICartItem } from "./interfaces/Items.interface";

// SET CATEGORY
let result = database.map((item) => {
  return item.category;
});
result.push("ALL");
const category = Array.from(new Set(result)).sort();

function App() {
  const [cartItem, setCartItem] = useState<ICartItem[]>([]);

  const handleAddToCart = (clikedItem: any) => {
    setCartItem((prev) => {
      const isItemInCart = cartItem.find((item) => item.id === clikedItem.id);
      if (isItemInCart) {
        return prev.map((item) => (item.id === clikedItem.id ? { ...item, amount: item.amount + 1 } : item));
      }
      return [{ ...clikedItem, amount: 1 }, ...prev];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItem((prev) =>
      prev.reduce((accumulator, item) => {
        if (item.id === id) {
          if (item.amount === 1) return accumulator;
          return [...accumulator, { ...item, amount: item.amount - 1 }];
        } else {
          return [...accumulator, item];
        }
      }, [] as ICartItem[])
    );
  };

  const getTotalItems = (items: ICartItem[]) => {
    return items.reduce((accumulator, item) => accumulator + item.amount, 0);
  };

  return (
    <Wrapper>
      <Header cartItem={cartItem} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} getTotalItems={getTotalItems} />
      <Navbar category={category} />
      <MainList database={database} addToCart={handleAddToCart} />
      <Footer />
    </Wrapper>
  );
}

export default App;
