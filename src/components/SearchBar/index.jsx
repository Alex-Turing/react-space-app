import {useContext, useRef} from 'react';
import styled from "styled-components";
import search from './search.png'
import { GlobalContext } from '../../context/GlobalContext';

const StyledSearchBarContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledTextInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
`;

const StyledIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
    cursor: pointer;
`;

const SearchBar = () => {
    const queryBox = useRef(null);
    const { dispatch } = useContext(GlobalContext);
    return (
    <StyledSearchBarContainer >
        <StyledTextInput ref={queryBox} type="text" placeholder="Search" />
        <StyledIcon src={search} alt="Search icon" onClick={ () => {
            dispatch({type: 'SET_QUERY', payload: queryBox.current.value});
            }} 
        />
    </StyledSearchBarContainer>
    );
};

export default SearchBar;