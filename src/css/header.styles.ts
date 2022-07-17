import styled from "styled-components";

export const Wrappter = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100px;
  cursor: pointer;
  background-color: white;

  .header-left {
    display: flex;
    align-items: center;
  }

  .header-left div:first-child {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
  }

  .header-left div:first-child p {
    padding: 2px;
  }

  .header-left div,
  .header-right div {
    margin-left: 20px;
    margin-right: 10px;
  }

  .header-right {
    display: flex;
    align-items: center;
  }
`;
