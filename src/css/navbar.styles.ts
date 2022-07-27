import styled from "styled-components";

export const Wrapper = styled.nav`
  margin-top: 100px;
  background-color: #eee;
  width: 100%;
  height: 50px;
  color: #aaa;

  .nav-ul {
    margin-left: 20px;
    display: flex;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }

  .nav-ul li {
    cursor: pointer;
    margin: 0 15px 0 15px;
  }

  .selected {
    color: black;
  }
`;
