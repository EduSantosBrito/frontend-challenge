import { useState } from 'react';
import styled from 'styled-components';

type ImageProps = {
    placeholder: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};

const Container = styled.div<{ loading: boolean; height: number; width: number }>`
    transition: filter 300ms ease-in-out;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    filter: ${({ loading }) => (loading ? 'blur(4px)' : 'initial')};
    > img {
        border-radius: 0.5rem;
    }
`;

const Image = ({ placeholder, src, alt, width, height }: ImageProps) => {
    const [loadedImage, setLoadedImage] = useState<boolean>(false);

    return (
        <Container height={height} width={width} loading={!loadedImage}>
            {!loadedImage && <img width={width} src={placeholder} alt={alt} />}
            <img
                width={width}
                style={{ display: !loadedImage ? 'none' : 'initial' }}
                src={src}
                alt={alt}
                onLoad={() => setLoadedImage(true)}
            />
        </Container>
    );
};

export default Image;
