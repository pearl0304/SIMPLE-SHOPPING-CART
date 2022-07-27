import { FC } from "react";
import { ICartItem } from "../interfaces/Items.interface";
import { Wrapper } from "../css/cartItem.styles";
import { Button } from "@mui/material";

type Props = {
  item: ICartItem;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: number) => void;
};

export const CartItem: FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const numberFormat = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Wrapper>
      <div className="thumb">
        <img src={item.image} alt={item.title}></img>
      </div>
      <div className="info">
        <h3>{item.title}</h3>
        <div>
          <p>Price : {numberFormat(item.price)}원</p>
          <p>Total : {numberFormat(item.amount * item.price)}원</p>
        </div>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          -
        </Button>
        {item.amount}
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => {
            addToCart(item);
          }}
        >
          +
        </Button>
      </div>
    </Wrapper>
  );
};
