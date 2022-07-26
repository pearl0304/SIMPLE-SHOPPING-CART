import React, { useState } from "react";
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

function App() {
  const [cartItem, setCartItem] = useState<ICartItem[]>([]);
  const handleAddToCart = (clikedItem: any) => {
    setCartItem((prev) => {
      const isItemInCart = cartItem.find((item) => item.id === clikedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clikedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [{ ...clikedItem, amount: 1 }, ...prev];
    });
  };

  return (
    <Wrapper>
      <Header cartItem={cartItem} addToCart={handleAddToCart} />
      <Navbar />
      <MainList database={database} addToCart={handleAddToCart} />
      <Footer />
    </Wrapper>
  );
}

export default App;
