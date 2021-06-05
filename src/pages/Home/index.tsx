import { useState } from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/Subtitle';
import TextInput from '../../components/TextInput';
import Title from '../../components/Title';

const ColoredTitle = styled.span`
    color: ${({ theme }) => theme.palette.red[100]};
    font-weight: 700;
`;

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <TextInput
                name='search-input'
                icon='search'
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                placeholder='Search book'
            />
            <Title>
                Hi, <ColoredTitle>Mehmed Al Fatih</ColoredTitle> 👋
            </Title>
            <Subtitle>Discover new book</Subtitle>
        </div>
    );
};

export default Home;
