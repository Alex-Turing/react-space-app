import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Nav = styled.nav``;
const Navbar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem 
                        activeIcon="icons/home-active.png" 
                        inactiveIcon="icons/home-inactive.png" 
                        active
                    >
                        Home
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="icons/most-views-active.png" 
                        inactiveIcon="icons/most-views-inactive.png"
                    >
                        Most Visited
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    );
};

export default Navbar;