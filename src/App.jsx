import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const GradientBackground = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;`

function App() {

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <Header />
        <Navbar />
      </GradientBackground>
    </>
  )
}

export default App
