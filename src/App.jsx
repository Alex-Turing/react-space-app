import { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import banner from './assets/banner.png';
import Gallery from "./components/Gallery";
import fotos from './fotos.json';
import ModalZoom from "./components/ModalZoom";

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

const App = () => {
  
  const [galleryPhotos, setGalleryPhotos] = useState(fotos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const switchFavoriteValue = (photo) => {
    if(photo.id === selectedPhoto?.id){
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !photo.favorite
      });
    }
    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ? !galleryPhoto.favorite : galleryPhoto.favorite
      }
    }))
  }; 

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <AppContainer> 
          <Header />
          <MainContainer>
            <Navbar />
            <GalleryContainer>
              <Banner text="The most comprehensive gallery of space images" backgroundImage={banner} />
              <Gallery 
                isPhotoSelected={photo => setSelectedPhoto(photo)} 
                photos={galleryPhotos} 
                switchFavoriteValue={switchFavoriteValue}
              />
            </GalleryContainer>
          </MainContainer>
        </AppContainer>
        <ModalZoom 
          photo={selectedPhoto} 
          whenClose={ () => setSelectedPhoto(null) } 
          switchFavoriteValue={switchFavoriteValue}
        />
      </GradientBackground>
    </>
  )
}

export default App
