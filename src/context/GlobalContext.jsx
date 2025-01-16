import { useReducer } from "react";
import { createContext, useState, useEffect } from "react";
import React from 'react'
import { BiPhotoAlbum } from "react-icons/bi";

export const GlobalContext = createContext();


const initialState = {
    query: '',
    galleryPhotos: [],
    selectedPhoto: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {...state, query: action.payload};
        case 'SET_GALLERY_PHOTOS':
            return {...state, galleryPhotos: action.payload};
        case 'SET_SELECTED_PHOTO':
            return {...state, selectedPhoto: action.payload};
        case 'SWITCH_FAVORITE':

            const galleryPhotos = state.galleryPhotos.map(galleryPhoto => {
                return {
                    ...galleryPhoto,
                    favorite: galleryPhoto.id === action.payload.id ? !action.payload.favorite : galleryPhoto.favorite
                }
            })

            if(action.payload.id === state.selectedPhoto?.id) {
                return {
                    ...state, 
                    galleryPhotos: galleryPhotos,
                    selectedPhoto: {
                        ...state.selectedPhoto, favorite: !state.selectedPhoto.favorite
                    }
                }
            } 
            else {
                return {
                    ...state, 
                    galleryPhotos: galleryPhotos
                }
            }
        default: 
            return state;
    }
};

const GlobalContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
    const getData = async () => {
        const response = await fetch('http://localhost:3001/photos');
        const data = await response.json();
        dispatch({type: 'SET_GALLERY_PHOTOS', payload: data});
    };

    setTimeout(() => getData(), 3000); //setTimeout() simula una demora de 3 segundos en la carga de datos, solo para propositos de simulacion
    }, []);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>  {/*Se comparten query y setQuery, porque ambos valores son compartidos como props en App.js */}
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;


