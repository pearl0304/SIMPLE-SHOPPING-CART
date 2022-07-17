import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { database } from "../database/products";
import { Item } from "./Item";
import { IShopItem } from "../interfaces/Items.interface";
import { Wrapper } from "../css/mainList.styles";

export const MainList = () => {
  return (
    <Wrapper>
      <Grid container spacing={5}>
        {database.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
