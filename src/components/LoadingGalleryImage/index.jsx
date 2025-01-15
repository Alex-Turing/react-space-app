import React from "react";
import styled from "styled-components";

const StyledLoadingContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLoadingImage = styled.img`
    width: 10vw;
`;

const LoadingGallery = () => {
    return (
        <StyledLoadingContainer>
            <StyledLoadingImage src="/img/loading.gif" alt="loading gif" />
        </StyledLoadingContainer>
    );
};

export default LoadingGallery;