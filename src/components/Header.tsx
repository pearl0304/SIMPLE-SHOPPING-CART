import { FC, useState } from "react";
import { Drawer } from "@mui/material";
import { Wrappter } from "../css/header.styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { CartList } from "./CartList";

export const Header = (prop: any) => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItem, addToCart } = prop;

  return (
    <Wrappter>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartList cartItem={cartItem} addToCart={addToCart} />
      </Drawer>

      <div className="header-left">
        <div>
          <p>R</p>
        </div>
        <div className="logo">RINE FRIENDS</div>
      </div>
      <div className="header-right">
        <div>
          <SearchIcon />
        </div>
        <div onClick={() => setCartOpen(true)}>
          <ShoppingBasketOutlinedIcon />
        </div>
        <div>
          <ViewHeadlineIcon />
        </div>
      </div>
    </Wrappter>
  );
};
