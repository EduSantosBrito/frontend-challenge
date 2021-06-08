import styled, { css } from 'styled-components';
import { VariantPropertiesType } from '../../utils/VariantProperties';
import BookCard, { BookCardProps, Variants } from '../BookCard';

type BookListProps = {
    books: BookCardProps[];
    variant: Variants;
};

const getContainerVariantProperties: VariantPropertiesType<Variants> = theme => ({
    'background-color': {
        discover: theme.palette.blue[200] as string,
        reading: theme.palette.green[100],
    },
});

const Container = styled.div<{ variant: Variants }>`
    > div {
        background-color: ${({ variant, theme }) => getContainerVariantProperties(theme)['background-color'][variant]};
    }
    ${({ variant, theme }) =>
        variant === 'discover' &&
        css`
            > div:nth-child(even) {
                & {
                    background-color: ${theme.palette.purple[100]};
                }
            }
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            align-items: center;
            height: 9.75rem;
            gap: 1rem;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
        `}
`;

const BookList = ({ books, variant }: BookListProps) => {
    return (
        <Container variant={variant}>
            {books.map(book => (
                <BookCard key={book.name} {...book} />
            ))}
        </Container>
    );
};

export default BookList;
