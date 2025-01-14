import styled from 'styled-components';
import tags from './tags.json';
import Button from '../Button';

const TagContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ButtonContainer = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
`;

const TextContainer = styled.div`
    width: 20%;
    font-size: 24px;
    color: #d9d9d9;
`;

const Tag = () => {
    return (
        <>
        
        <ButtonContainer>
            <TextContainer>Search By Tag:</TextContainer>
            {tags.map(tag => {
                return <Button type="button" key={tag.id} buttonText={tag.titulo}></Button>
            })}
        </ButtonContainer>
            
        </>
    );
};

export default Tag;