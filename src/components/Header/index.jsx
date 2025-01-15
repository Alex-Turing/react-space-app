import styled from "styled-components";
import SearchBar from "../SearchBar";
import logo from './logo.png'

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

const StyledLogo = styled.img`
    width: 212px;
`;

const Header = ({setQuery}) => {
    return (
    <StyledHeader>
        <StyledLogo src={logo} alt="logo space app" />
        <SearchBar setQuery={setQuery}/>
    </StyledHeader>
    )
};

export default Header;