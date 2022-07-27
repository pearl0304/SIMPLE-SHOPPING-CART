import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #eee;

  .thumb {
    width: 150px;
    height: 200px;
    background-color: aliceblue;
    margin-bottom: 30px;
  }

  .thumb img {
    width: 100%;
    height: 100%;
  }

  .info {
    margin-bottom: 20px;
  }

  .info h3 {
    margin-bottom: 10px;
  }

  .info div p {
    margin-bottom: 5px;
  }

  .buttons {
    margin-bottom: 20px;
  }

  .buttons Button {
    margin: 0 10px 0px 10px;
    background-color: lightpink;
  }
`;
