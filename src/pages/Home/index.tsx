import { useState } from 'react';
import styled from 'styled-components';
import BookList from '../../components/BookList';
import Subtitle from '../../components/Subtitle';
import TextInput from '../../components/TextInput';
import Title from '../../components/Title';

const ColoredTitle = styled.span`
    color: ${({ theme }) => theme.palette.red[100]};
    font-weight: 700;
`;

const Container = styled.div`
    margin: 0 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
`;

const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const SectionLink = styled.button`
    background: transparent;
    border: none;
    font-family: ${({ theme }) => theme.fonts.family.link};
    font-size: ${({ theme }) => theme.fonts.size.link.default};
    color: ${({ theme }) => theme.palette.blue[100]};
    z-index: 5;
`;

const VideoImage = styled.img`
    width: 100%;
    height: auto;
`;

const DiscoverOvalRight = styled.img`
    position: absolute;
    right: 0;
    z-index: 0;
`;

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Container>
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
            <SectionContainer>
                <Subtitle>Discover new book</Subtitle>
                <SectionLink>More</SectionLink>
                <DiscoverOvalRight src='/images/discover-right.webp' />
            </SectionContainer>
            <BookList
                variant='discover'
                books={[
                    {
                        image: 'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        imagePlaceholder:
                            'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        variant: 'discover',
                        author: 'Adam Grant',
                        name: 'Originals 1',
                        count: 200,
                    },
                    {
                        image: 'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        imagePlaceholder:
                            'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        variant: 'discover',
                        author: 'Adam Grant',
                        name: 'Originals 2',
                        count: 200,
                    },
                    {
                        image: 'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        imagePlaceholder:
                            'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        variant: 'discover',
                        author: 'Adam Grant',
                        name: 'Originals 3',
                        count: 200,
                    },
                ]}
            />
            <SectionContainer>
                <Subtitle>Currently reading</Subtitle>
                <SectionLink>All</SectionLink>
            </SectionContainer>
            <BookList
                variant='reading'
                books={[
                    {
                        image: 'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        imagePlaceholder:
                            'http://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        variant: 'reading',
                        author: 'Adam Grant',
                        name: 'Originals',
                        actualChapter: 2,
                        totalChapter: 9,
                    },
                ]}
            />
            <SectionContainer>
                <Subtitle>Reviews of The Days</Subtitle>
                <SectionLink>All Video</SectionLink>
            </SectionContainer>
            <VideoImage src='/images/video.webp' alt='Man holding a book' />
        </Container>
    );
};

export default Home;
