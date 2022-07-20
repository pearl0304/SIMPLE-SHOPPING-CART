import { FC, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { IShopItem, ICartItem } from "../interfaces/Items.interface";
import { Wrapper } from "../css/item.styles";
import Swal from "sweetalert2";
import { JoinFull } from "@mui/icons-material";

type Props = {
  item: IShopItem;
};
export const Item: FC<Props> = ({ item }) => {
  const [cartList, setCartList] = useState<ICartItem[]>([]);
  const numberFormat = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onClickButton = (clickedItem: IShopItem) => {
    Swal.fire({
      title: `장바구니에 추가하시겠습니까?`,
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
    // 일단 카트 리스트에 클릭한 아이템 넣기
    // 카트 리스트 localstorage 에 저장하기
    // 나중에 ) id가 중복되는 아이템은 amount 만 올려주기
  };

  console.log("cartList", cartList);

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
