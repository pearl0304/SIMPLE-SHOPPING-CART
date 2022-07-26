import { FC } from "react";
import { Grid } from "@mui/material";
import { Item } from "./Item";
import { Wrapper } from "../css/mainList.styles";
import { IShopItem } from "../interfaces/Items.interface";

type Props = {
  database: IShopItem[];
  addToCart: (item: IShopItem) => void;
};

export const MainList: FC<Props> = ({ database, addToCart }) => {
  return (
    <Wrapper>
      <Grid container spacing={5}>
        {database.map((item: any) => (
          <Grid item key={item.id} xs={12} sm={3}>
            <Item item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
