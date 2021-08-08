import { Filtros } from "./components/Filtros";
import { Produtos } from "./components/Produtos";
import { Carrinho } from "./components/Carrinho";
import styled from "styled-components";
import React from "react";

const AppContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`

function App() {
  return (
    <AppContainer>
      <Filtros/>
      <Produtos/>
      <Carrinho/>
    </AppContainer>
  )
}



export default App;
