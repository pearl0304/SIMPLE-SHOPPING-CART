import { FC, useState } from "react";
import { Wrapper } from "../css/navbar.styles";

type Props = {
  category: string[];
};

export const Navbar: FC<Props> = ({ category }) => {
  const handleClick = (cate: string) => {};

  const RenderLi = (cate: string, index: number) => {
    return <li key={index}>{cate}</li>;
  };

  return (
    <Wrapper>
      <ul className="nav-ul">
        {category.map((item, index) => RenderLi(item, index))}
      </ul>
    </Wrapper>
  );
};
