import styled from "styled-components";
import Title from "../Title";
import Tag from "./Tags";
import Popular from "./Popular";

const GalleryGrid = styled.div`
    display: flex;
`;

const FlexSection = styled.section`
    flex-grow: 1;
`;

const Gallery = () => {
    return (
        <>
            <Tag />
            <GalleryGrid>
                <FlexSection>
                    <Title>Browse the Gallery</Title>
                </FlexSection>
                <Popular>

                </Popular>
            </GalleryGrid>
            
        </>
    );
};

export default Gallery;