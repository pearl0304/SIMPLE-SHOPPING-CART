import { FC } from "react";
import { Wrapper } from "../css/cartList.styles";
import { IShopItem, ICartItem } from "../interfaces/Items.interface";

type Props = {
  item: IShopItem;
};
export const CartList: FC<Props> = ({ item }) => {
  return (
    <Wrapper>
      <h3>장바구니</h3>
    </Wrapper>
  );
};
