import styled from "styled-components";

const StyledNavigationItem = styled.li`
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${props => props.$active ? "#7b78e5" : "#d9d9d9"};
    font-family: ${props => props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
`;
const NavigationItem = (props) => {
    const {children, activeIcon, inactiveIcon, active=false} = props;
    return (
        <StyledNavigationItem $active={active}>
        <img src={active ? activeIcon : inactiveIcon} alt="nav item icon" />
        {children}
        </StyledNavigationItem>
    );
};

export default NavigationItem;