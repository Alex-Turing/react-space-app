import styled from "styled-components";
import IconButton from "../../IconButton";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import useModalPhoto from "../../../hooks/useModalPhoto";

const StyledFigure = styled.figure`
    width: ${props => props.$expanded ? '90%' : '370px' };
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: #fff;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: "GandhiSansBold";
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Image = (props) => {

    const { photo, expanded=false } = props;
    const { dispatch } = useContext(GlobalContext);
    const { openModal } = useModalPhoto();
    const favoriteIcon = photo.favorite ? "icons/favorite-active.png" : "icons/favorite.png";

    return (
        <>
            <StyledFigure $expanded={expanded} id={`foto-${photo.id}`}>
                <img src={photo.path} alt={photo.titulo}/>
                <figcaption>
                <h3>{photo.titulo}</h3>
                    <StyledFooter>
                        <h4>{photo.fuente}</h4>
                        <IconButton onClick={() => dispatch({type: 'SWITCH_FAVORITE', payload: photo})}>
                            <img src={favoriteIcon} alt="favorite icon" />
                        </IconButton>
                        {!expanded && <IconButton aria-hidden={expanded} onClick={() => openModal(photo)}>
                            <img src="icons/expand.png" alt="expand icon" />
                        </IconButton>}
                    </StyledFooter>
                </figcaption>
            </StyledFigure>
        </>
    );
};

export default Image;