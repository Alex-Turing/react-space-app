import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 236px;
`;

const Nav = styled.nav``;
const Navbar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem activeIcon="icons/home-active.png" inactiveIcon="icons/home-inactive.png" active>
                        Home
                    </NavigationItem>
                    <NavigationItem activeIcon="icons/most-views-active.png" inactiveIcon="icons/most-views-inactive.png">
                        Most Viewed
                    </NavigationItem>
                    <NavigationItem activeIcon="icons/liked-active.png" inactiveIcon="icons/liked-inactive.png">
                        Most Liked
                    </NavigationItem>
                    <NavigationItem activeIcon="icons/new-active.png" inactiveIcon="icons/new-inactive.png">
                        New
                    </NavigationItem>
                    <NavigationItem activeIcon="icons/sorprise-me-active.png" inactiveIcon="icons/sorprise-me-inactive.png">
                        Sorprise Me
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    );
};

export default Navbar;