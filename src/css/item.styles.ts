import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-size: 14px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-width: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    padding: 1rem;
    height: 100%;
  }

  div h3 {
    margin: 20px 0 20px 0;
  }
`;
