import { FC, useState } from "react";
import { CartList } from "./CartList";
import { Button } from "@mui/material";
import { IShopItem } from "../interfaces/Items.interface";
import { Wrapper } from "../css/item.styles";
import Swal from "sweetalert2";

type Props = {
  item: IShopItem;
};
export const Item: FC<Props> = ({ item }) => {
  const numberFormat = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onClickButton = (clickedItem: IShopItem) => {
    Swal.fire({
      title: `장바구니에 ${clickedItem.title} 을 추가하시겠습니까?`,
      showDenyButton: true,
      confirmButtonText: "ADD",
      denyButtonText: "CANCLE",
    }).then((result) => {
      if (result.isConfirmed) {
        handleAddToCart(clickedItem);
        Swal.fire("추가되었습니다", "", "success");
      } else {
        Swal.fire("취소하였습니다", "", "error");
      }
    });
  };

  const handleAddToCart = (clickedItem: IShopItem) => {
    <CartList item={clickedItem} />;
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="item-info">
          <h3>{item.title}</h3>
          <h3>{numberFormat(item.price)}원</h3>
        </div>
        <Button
          onClick={() => {
            onClickButton(item);
          }}
        >
          Add To Cart
        </Button>
      </div>
    </Wrapper>
  );
};
