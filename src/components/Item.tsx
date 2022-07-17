import React, { FC, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { IShopItem } from "../interfaces/Items.interface";
import { Wrapper } from "../css/item.styles";

type Props = {
  item: IShopItem;
};
export const Item: FC<Props> = ({ item }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
      </div>
      <Button>Add To Cart</Button>
    </Wrapper>
  );
};
