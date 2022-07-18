import styled from "styled-components";

export const Wrappter = styled.footer`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  align-items: center;

  .footer-top {
    width: 100%;
    margin-bottom: 30px;
    background-color: #eee;
    height: 50px;
    line-height: 50px;
  }

  .footer-top ul {
    display: flex;
    justify-content: space-evenly;
  }
  .footer-top ul li {
    cursor: pointer;
    margin: 0 10px 0 10px;
  }

  .footer-bottom {
    margin-bottom: 20px;
  }
`;
