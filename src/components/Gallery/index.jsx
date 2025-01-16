import styled from "styled-components";
import Title from "../Title";
import Tag from "./Tags";
import Popular from "./Popular";
import Image from "./Image";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import LoadingGallery from "../LoadingGalleryImage";

const GalleryGrid = styled.div`
    display: flex;
`;

const FlexSection = styled.section`
    flex-grow: 1;
`;

const ImageContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 24px;
`;

const Gallery = () => {
    const { state } = useContext(GlobalContext);
    return (
        state.galleryPhotos.length == 0 ? <LoadingGallery />  :
        <>
            <Tag />
            <GalleryGrid>
                <FlexSection>
                    <Title>Browse the Gallery</Title>
                    <ImageContainer>
                        {state.galleryPhotos.filter(photo => {
                            return state.query == '' || photo.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"")
                                .includes(state.query.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"")) // toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"") elimina los acentos (como tildes)
                        }).map(photo => 
                            <Image 
                                key={photo.id}
                                photo={photo}
                            />
                        )}
                    </ImageContainer>
                </FlexSection>
                <Popular>

                </Popular>
            </GalleryGrid>
            
        </>
    );
};

export default Gallery;