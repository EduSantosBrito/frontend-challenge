import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.family.author};
    font-size: ${({ theme }) => theme.fonts.size.title.default};
    color: ${({ theme }) => theme.palette.gray[400]};
`;

const Detail = () => {
    return (
        <div>
            <Title>Detail</Title>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
        </div>
    );
};

export default Detail;
