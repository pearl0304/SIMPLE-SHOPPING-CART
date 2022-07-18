import React, { FC, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { IShopItem } from "../interfaces/Items.interface";
import { Wrapper } from "../css/item.styles";

type Props = {
  item: IShopItem;
};
export const Item: FC<Props> = ({ item }) => {
  const numberFormat = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <h3>{numberFormat(item.price)}원</h3>
      </div>
      <Button>Add To Cart</Button>
    </Wrapper>
  );
};
