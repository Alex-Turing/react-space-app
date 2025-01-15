import styled from 'styled-components';
import Title from "../../Title";
import { useState, useEffect } from 'react';
import LoadingGallery from '../../LoadingGalleryImage';

const StyledSectionContainer = styled.section`
    margin-left: 20px;
`;

const PhotosColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const PopularImage = styled.img`
    width: 212px;
    border-radius: 20px;
`;

const PopularButton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Popular = () => {
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3001/popular');
            const data = await response.json();
            setPhotos([...data]);
        };
        getData();
    }, []);

    return (
        <StyledSectionContainer>
            <Title $align="center">Populars</Title>
            {
                photos.length === 0 ? <LoadingGallery /> :
                <PhotosColumn>
                    {photos.map(photo => <PopularImage key={photo.id} src={photo.path} alt={photo.alt} />)}
                </PhotosColumn>
            }
            
            <PopularButton>
                View More
            </PopularButton>
        </StyledSectionContainer>
    )
};

export default Popular;