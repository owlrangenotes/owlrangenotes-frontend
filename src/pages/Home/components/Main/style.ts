import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;

  .navigation-bar {
    width: 15vw;
    height: 85vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    //background-color: #FFFFFF;

    figure {
      display: flex;
      align-items: center;
      margin: 20px 0;

      figcaption {

        span {
          color: #0007AE;
          width: 5%;
          display: none;
        }
      }

      svg {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        color: #0007AE;
      }
    }

    ul {
      li {
        font-family: sans-serif;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        margin: 20px 0;
        width: 100%;
        padding: 10px;
        cursor: pointer;
        color: #424242;
        border-radius: 10px;
        list-style-type: none;

        svg {
          color: #0007AE;
        }
      }

      li:hover {
        transition: 0.5s;
        background-color: #dddddd;
      }
    }
  }

  .dashboard {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .what-a-make {
      display: flex;
      justify-content: center;
      flex-direction: column;

      h2 {
        margin-top: 60px;
        color: #474747;
        font-size: 31.7px;
      }

      .content {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export { MainStyled};
