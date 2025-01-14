import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import banner from './assets/banner.png';
import Gallery from "./components/Gallery";

const GradientBackground = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 98%;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <AppContainer> 
          <Header />
          <MainContainer>
            <Navbar />
            <GalleryContainer>
              <Banner text="The most comprehensive gallery of space images" backgroundImage={banner}/>
              <Gallery />
            </GalleryContainer>
          </MainContainer>
        </AppContainer>
      </GradientBackground>
    </>
  )
}

export default App
