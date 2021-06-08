import { useMemo, useRef } from 'react';
import styled, { css } from 'styled-components';
import useOnScreen from '../../hook/useOnScreen';
import { VariantPropertiesType } from '../../utils/VariantProperties';
import Icon, { Icons } from '../Icon';
import Image from '../Image';

export type Variants = 'discover' | 'reading';

type BookCardDefault = {
    variant?: Variants;
    name: string;
    author: string;
    image: string;
    imagePlaceholder: string;
};

type WithUserCount<T> = T & { count: number };
type WithChapter<T> = T & { actualChapter: number; totalChapter: number };

export type BookCardProps = WithUserCount<BookCardDefault> | WithChapter<BookCardDefault>;

const getContainerVariantProperties: VariantPropertiesType<Variants, { isVisible: boolean }> = (theme, customProp) => ({
    height: {
        discover: customProp?.isVisible ? '8.75rem' : '8.125rem',
        reading: '6.25rem',
    },
    'grid-template-areas': {
        discover: "'info image'",
        reading: "'. info'",
    },
    'grid-template-columns': {
        discover: '12rem 1fr',
        reading: '1fr 2fr',
    },
    // PLEASE SORRY ABOUT THIS
    'margin-left': {
        discover: 'inherit',
        reading: '-2rem',
    },
    'padding-left': {
        discover: '1rem',
        reading: '3rem',
    },
});

const Container = styled.div<{ variant: Variants; isVisible: boolean }>`
    max-width: 17rem;
    height: ${({ variant, theme, isVisible }) => getContainerVariantProperties(theme, { isVisible }).height[variant]};
    transition: height 300ms ease-out;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    display: grid;
    grid-template-areas: ${({ variant, theme }) => getContainerVariantProperties(theme)['grid-template-areas'][variant]};
    grid-template-columns: ${({ variant, theme }) => getContainerVariantProperties(theme)['grid-template-columns'][variant]};
    margin-left: ${({ variant, theme }) => getContainerVariantProperties(theme)['margin-left'][variant]};
    padding-left: ${({ variant, theme }) => getContainerVariantProperties(theme)['padding-left'][variant]};
    position: relative;
`;

const getTitleVariantProperties: VariantPropertiesType<Variants> = theme => ({
    'font-size': {
        discover: theme.fonts.size.book.default,
        reading: theme.fonts.size.book.small,
    },
    color: {
        discover: theme.palette.white,
        reading: theme.palette.gray[500] as string,
    },
});

const Title = styled.h2<{ variant: Variants }>`
    margin: 0;
    align-self: flex-start;
    font-family: ${({ theme }) => theme.fonts.family.book};
    font-size: ${({ variant, theme }) => getTitleVariantProperties(theme)['font-size'][variant]};
    color: ${({ variant, theme }) => getTitleVariantProperties(theme).color[variant]};
    letter-spacing: 0.125rem;
    z-index: 5;
`;

const getAuthorVariantProperties: VariantPropertiesType<Variants> = theme => ({
    'font-size': {
        discover: theme.fonts.size.author.default,
        reading: theme.fonts.size.author.small,
    },
    'font-style': {
        discover: 'italic',
        reading: 'initial',
    },
    color: {
        discover: theme.palette.gray[200] as string,
        reading: theme.palette.gray[400] as string,
    },
});

const Author = styled.h3<{ variant: Variants }>`
    margin: 0;
    align-self: flex-start;
    font-family: ${({ theme }) => theme.fonts.family.author};
    font-size: ${({ variant, theme }) => getAuthorVariantProperties(theme)['font-size'][variant]};
    font-style: ${({ variant, theme }) => getAuthorVariantProperties(theme)['font-style'][variant]};
    font-weight: 400;
    color: ${({ variant, theme }) => getAuthorVariantProperties(theme).color[variant]};
    z-index: 5;
`;

const getDataVariantProperties: VariantPropertiesType<Variants> = theme => ({
    color: {
        discover: theme.palette.white,
        reading: theme.palette.gray[500] as string,
    },
});

const Data = styled.p<{ variant: Variants }>`
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.family.author};
    font-size: ${({ theme }) => theme.fonts.size.author.small};
    color: ${({ variant, theme }) => getDataVariantProperties(theme).color[variant]};
`;

const Highlight = styled.span<{ bold?: boolean; red?: boolean }>`
    font-weight: ${({ bold }) => (bold ? 700 : 400)};
    color: ${({ red, theme }) => (red ? theme.palette.red[100] : 'inherit')};
`;

const DataContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 1rem;
`;

const getInfoVariantProperties: VariantPropertiesType<Variants> = () => ({
    gap: {
        discover: '0.5rem',
        reading: '0.25rem',
    },
});

const Info = styled.div<{ variant: Variants }>`
    grid-area: info;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${({ variant, theme }) => getInfoVariantProperties(theme).gap[variant]};
    z-index: 5;
`;

const getImageContainerVariantProperties: VariantPropertiesType<Variants> = () => ({
    position: {
        discover: 'initial',
        reading: 'absolute',
    },
    left: {
        discover: 'initial',
        reading: '2rem',
    },
    top: {
        discover: 'initial',
        reading: '-0.5rem',
    },
});

const DiscoverOvalLeft = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
`;

const DiscoverBall = styled.img`
    position: absolute;
    z-index: 10;
    top: 1rem;
    right: 7.5rem;
`;

const DiscoverRectangle = styled.img`
    position: absolute;
    z-index: 10;
    bottom: 1.5rem;
    right: 5rem;
`;

const DiscoverTriangle = styled.img`
    position: absolute;
    top: 0;
    right: 5rem;
    z-index: 10;
`;

const ReadingBall = styled.img`
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
`;

const ReadingSmallBall = styled.img`
    position: absolute;
    z-index: 10;
    top: 0;
`;

const ReadingRectangle = styled.img`
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 1rem;
`;

const ReadingOvalRight = styled.img`
    position: absolute;
    z-index: 10;
    overflow: hidden;
    top: 0;
    right: 0;
`;

const ImageContainer = styled.div<{ variant: Variants }>`
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${({ variant, theme }) => getImageContainerVariantProperties(theme).position[variant]};
    left: ${({ variant, theme }) => getImageContainerVariantProperties(theme).left[variant]};
    top: ${({ variant, theme }) => getImageContainerVariantProperties(theme).top[variant]};
    ${({ variant }) =>
        variant === 'reading' &&
        css`
            img {
                box-shadow: ${({ theme }) => theme.shadow};
            }
        `}
    z-index: 5;
`;

const BookCard = ({ author, name, image, imagePlaceholder, variant = 'discover', ...rest }: BookCardProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(ref);

    const iconName = useMemo((): Icons => {
        const bookWithChapter = rest as WithChapter<BookCardDefault>;
        if (bookWithChapter.totalChapter && bookWithChapter.actualChapter) {
            return 'chapter';
        }
        return 'active-users';
    }, [rest]);

    const bookInfo = useMemo(() => {
        const bookWithChapter = rest as WithChapter<BookCardDefault>;
        if (bookWithChapter.totalChapter && bookWithChapter.actualChapter) {
            return (
                <Data variant={variant}>
                    {`Chapter `}
                    <Highlight bold red>
                        {bookWithChapter.actualChapter}
                    </Highlight>
                    {` from ${bookWithChapter.totalChapter}`}
                </Data>
            );
        }
        const bookWithUserCount = rest as WithUserCount<BookCardDefault>;
        return (
            <Data variant={variant}>
                <Highlight bold>{bookWithUserCount.count}+</Highlight> Read Now
            </Data>
        );
    }, [rest, variant]);

    const width: Record<Variants, number> = {
        discover: 80,
        reading: 90,
    };

    const height = useMemo(() => Math.floor(width[variant] / (9 / 13)), [variant]);

    return (
        <Container isVisible={isVisible} ref={ref} variant={variant}>
            {variant === 'discover' && <DiscoverOvalLeft src='/images/discover-left.webp' />}
            <Info variant={variant}>
                {variant === 'reading' && (
                    <>
                        <ReadingSmallBall src='/images/reading-small-ball.svg' />
                        <ReadingRectangle src='/images/reading-rectangle.svg' />
                        <ReadingBall src='/images/reading-ball.svg' />
                        <ReadingOvalRight src='/images/reading-right.svg' />
                    </>
                )}
                <Title variant={variant}>{name}</Title>
                <Author variant={variant}>{`${variant === 'reading' ? 'by ' : ''}${author}`}</Author>
                <DataContainer>
                    <Icon small name={iconName} />
                    {bookInfo}
                </DataContainer>
            </Info>
            <ImageContainer variant={variant}>
                {variant === 'discover' && (
                    <>
                        <DiscoverBall src='/images/ball.svg' />
                        <DiscoverRectangle src='/images/discover-rectangle.svg' />
                        <DiscoverTriangle src='/images/discover-triangle.svg' />
                    </>
                )}
                <Image
                    width={width[variant]}
                    height={height}
                    placeholder={imagePlaceholder}
                    src={image}
                    alt={`Thumbnail of "${name}" book`}
                />
            </ImageContainer>
        </Container>
    );
};

export default BookCard;
