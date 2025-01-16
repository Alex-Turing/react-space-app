import { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import banner from './assets/banner.png';
import Gallery from "./components/Gallery";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";
import LoadingGallery from "./components/LoadingGalleryImage";

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
  
  const [galleryPhotos, setGalleryPhotos] = useState([]);
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

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3001/photos');
      const data = await response.json();
      setGalleryPhotos([...data]);
    };

    setTimeout(() => getData(), 3000); //setTimeout() simula una demora de 3 segundos en la carga de datos, solo para propositos de simulacion
  }, []);

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <AppContainer> 
          <Header setQuery={setQuery}/>
          <MainContainer>
            <Navbar />
            <GalleryContainer>
              <Banner text="The most comprehensive gallery of space images" backgroundImage={banner} />
              {galleryPhotos.length == 0 ?  
                <LoadingGallery /> :
                <Gallery 
                  isPhotoSelected={photo => setSelectedPhoto(photo)} 
                  photos={galleryPhotos} 
                  switchFavoriteValue={switchFavoriteValue}
                  query={query}
                />
              }
            </GalleryContainer>
          </MainContainer>
        </AppContainer>
        <ModalZoom 
          photo={selectedPhoto} 
          whenClose={ () => setSelectedPhoto(null) } 
          switchFavoriteValue={switchFavoriteValue}
        />
        <Footer />
      </GradientBackground>
    </>
  )
}

export default App
