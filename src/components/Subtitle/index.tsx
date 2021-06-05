import styled from 'styled-components';

const Subtitle = styled.h1<{ size?: 'small'; bold?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.family.subtitle};
    font-size: ${({ theme, size }) => theme.fonts.size.subtitle[size === 'small' ? 'small' : 'default']};
    font-weight: ${({ bold }) => (bold ? '700' : '500')};
    color: ${({ theme }) => theme.palette.gray[500]};
    margin: 0;
    padding: 0;
`;

export default Subtitle;
