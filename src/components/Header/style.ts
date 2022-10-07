import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 15vh;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  //background-color: #FFFFFF;

  svg {
    margin-left: 4.17%;
  }

  strong {
    margin-left: 0.5%;
    font-family: sans-serif;
    font-size: 26px;
    width: 10%;
    padding: 15px;
  }
`;

export { HeaderStyled };
