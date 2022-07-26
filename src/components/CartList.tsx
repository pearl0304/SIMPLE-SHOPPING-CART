import { FC } from "react";
import { Wrapper } from "../css/cartList.styles";
import { ICartItem } from "../interfaces/Items.interface";
import { CartItem } from "./CartItem";

type Props = {
  cartItem: ICartItem[];
  addToCart: (clickedItem: ICartItem) => void;
};
export const CartList: FC<Props> = ({ cartItem, addToCart }) => {
  const totalPrice = (items: ICartItem[]) => {
    items.reduce((count, item) => count + item.amount * item.price, 0);
  };

  return (
    <Wrapper>
      <h3>Your Shopping Cart</h3>
      {cartItem.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </Wrapper>
  );
};
