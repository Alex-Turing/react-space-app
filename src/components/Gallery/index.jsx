import styled from "styled-components";
import Title from "../Title";
import Tag from "./Tags";
import Popular from "./Popular";
import Image from "./Image";

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

const Gallery = (props) => {
    const { photos=[], isPhotoSelected, switchFavoriteValue, query } = props;
    return (
        <>
            <Tag />
            <GalleryGrid>
                <FlexSection>
                    <Title>Browse the Gallery</Title>
                    <ImageContainer>
                        {photos.filter(photo => {
                            return query == '' || photo.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"")
                                .includes(query.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"")) // toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"") elimina los acentos (como tildes)
                        }).map(photo => 
                            <Image 
                                switchFavoriteValue={switchFavoriteValue}
                                zoomRequested={isPhotoSelected}
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