import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 300px;
  padding: 20px;

  .title {
    text-align: center;
    align-items: center;
    margin: 15px 15px 40px 15px;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
  }
  .close {
    margin-left: 20px;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  .price {
    margin-top: 20px;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
  }
`;
