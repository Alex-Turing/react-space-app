import styled from "styled-components";
import Image from "../Gallery/Image";
import IconButton from "../IconButton";

const StyledOverlay = styled.div`
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`;

const StyledDialogContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const StyledDialog = styled.dialog`
    position: absolute;
    top: 294px;
    width: 1156px;
    padding: 0;
    background: none;
    border: 0;
    form {
        button {
            position: absolute;
            top: 20px;
            right: 80px;
        }
    }
`;

const ModalZoom = (props) => {
    const { photo, whenClose, switchFavoriteValue } = props;
    return (
        <>
            {photo && <>
                <StyledOverlay />
                <StyledDialog open={!!photo} onClose={whenClose}>
                    <StyledDialogContent>
                        <Image photo={photo} expanded={true} switchFavoriteValue={switchFavoriteValue}/>
                        <form method="dialog">
                            <IconButton>
                                <img src="icons/close.png" alt="close icon" />
                            </IconButton>
                        </form>
                    </StyledDialogContent>
                </StyledDialog>
             </>
            }
        </>
    );
};

export default ModalZoom