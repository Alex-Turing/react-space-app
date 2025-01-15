import styled from 'styled-components';
import tags from './tags.json';
import Button from '../Button';

const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 24px;
`;

const TagTitle = styled.h3`
    margin: 0;
    font-size: 24px;
    color: #d9d9d9;
`;

const Tag = () => {
    return (
        <TagContainer>
            <TagTitle>Search By Tag:</TagTitle>
            <ButtonContainer>
                {tags.map(tag => <Button key={tag.id} buttonText={tag.titulo}></Button>)}
            </ButtonContainer>
        </TagContainer>
    );
};

export default Tag;