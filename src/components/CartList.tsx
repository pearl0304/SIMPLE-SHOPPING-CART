import { FC, useState } from "react";
import { Wrapper } from "../css/cartList.styles";
import { ICartItem } from "../interfaces/Items.interface";
import { CartItem } from "./CartItem";

type Props = {
  cartItem: ICartItem[];
  addToCart: (clickedItem: ICartItem) => void;
  removeFromCart: (id: number) => void;
};
export const CartList: FC<Props> = ({ cartItem, addToCart, removeFromCart }) => {
  const totalPrice = (items: ICartItem[]) => {
    return items.reduce((count, item) => count + item.amount * item.price, 0);
  };
  const numberFormat = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const hidden = cartItem.length === 0 ? "hidden" : "";

  return (
    <Wrapper>
      <div className="title">
        <h3>Your Shopping Cart</h3>
      </div>
      <div className={hidden}>
        {cartItem.map((item) => (
          <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
        ))}
        <div className="price">
          <span>
            TOTAL : <strong>{numberFormat(totalPrice(cartItem))}원</strong>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
