import styled from "styled-components";

const NavigationItem = (props) => {
    const {children, activeIcon, inactiveIcon, active=false} = props;
    return (
        <>
        <img src={active ? activeIcon : inactiveIcon} alt="nav item icon" />
        {children}
        </>
    );
};

export default NavigationItem;