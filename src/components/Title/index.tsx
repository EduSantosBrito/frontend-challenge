import styled from 'styled-components';

const Title = styled.h1<{ size?: 'small'; bold?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.family.title};
    font-size: ${({ theme, size }) => theme.fonts.size.title[size === 'small' ? 'small' : 'default']};
    font-weight: ${({ bold }) => (bold ? '700' : '400')};
    color: ${({ theme }) => theme.palette.gray[500]};
    margin: 0;
    padding: 0;
`;

export default Title;
