import React from "react";
// Components
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { MainList } from "./components/MainList";
//Style
import { Wrapper } from "./css/App.styles";
function App() {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <MainList />
    </Wrapper>
  );
}

export default App;
