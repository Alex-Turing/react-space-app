import { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';


function useModalPhoto() {
    const { state, dispatch } = useContext(GlobalContext)

    const openModal = (photo) => {
        dispatch({type: 'SET_SELECTED_PHOTO', payload: photo})
    };

    const closeModal = () => {
        dispatch({type: 'SET_SELECTED_PHOTO', payload: null})
    };

    const selectedPhoto = state.selectedPhoto

    const isModalOpen = state.isModalOpen;

    return {
        openModal,
        closeModal,
        selectedPhoto,
        isModalOpen
    };
}

export default useModalPhoto;