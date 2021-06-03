import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.family.title};
    font-size: ${({ theme }) => theme.fonts.size.title.default};
    color: ${({ theme }) => theme.palette.gray[400]};
`;

const Search = () => {
    return (
        <div>
            <Title>Search</Title>
            <Link to='/'>Home</Link>
            <Link to='/detail'>Detail</Link>
        </div>
    );
};

export default Search;
