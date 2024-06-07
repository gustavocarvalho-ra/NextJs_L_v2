import styled from "styled-components";
import api from './../../services/api';

export const Bg = styled.section `
  max-width: 100vw;
  height: 130vh;
  background: rgb(3, 4, 10);
  display: flex;
  flex-wrap: wrap;


  .card {
    width: 230px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: aqua;


    img {
      width: 220px;
      height: 220px;
      border-radius: 8px;
    }

    .nam {
      color: wheat;
    }
  }
`