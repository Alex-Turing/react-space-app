import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #d9d9d9;
    color: #fff;
    font-size: 16px;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
`;

const Button = (props) => {
    const {buttonText} = props;
    return (
        <StyledButton>{buttonText}</StyledButton>
    );
}

export default Button;