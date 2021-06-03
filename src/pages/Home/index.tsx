import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.family.book};
    font-size: ${({ theme }) => theme.fonts.size.title.default};
    color: ${({ theme }) => theme.palette.gray[400]};
`;

const Home = () => {
    return (
        <div>
            <Title>Home</Title>
            <Link to='/detail'>Detail</Link>
            <Link to='/search'>Search</Link>
        </div>
    );
};

export default Home;
