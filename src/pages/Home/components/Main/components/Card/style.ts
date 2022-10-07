import styled from "styled-components";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  width: 12vw;
  padding: 15px;
  box-shadow: 0px 1.73505px 8.67525px rgba(0, 0, 0, 0.4);
  background-color: #FFFFFF;
  border-radius: 17.13px;
  margin: 40px 30px;
  cursor: pointer;

  :hover {
    transition: 0.5s;
    background-color: #dddddd;
  }

  svg:hover {
    transition: 0.5s;
    color: white;
  }

  h3, p {
    text-align: center;
    font-family: sans-serif;
  }

  h3 {
    font-size: 15px;
    margin: 10px 0;
    width: 70%;
  }

  p {
    font-size: 13.5px;
    margin-top: 10px;
  }
`;

export { SectionStyled };
