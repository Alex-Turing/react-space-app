import styled from "styled-components";

const StyledButton = styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    color: #fff;
    font-size: 24px;
    transition: background-color 0.3s ease;
    border-radius: 10px;
    cursor: pointer;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
        border-color: #C98CF1;
    }
`;

const Button = (props) => {
    const {buttonText} = props;
    return (
        <StyledButton>{buttonText}</StyledButton>
    );
}

export default Button;