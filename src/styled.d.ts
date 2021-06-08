import 'styled-components';

interface FontTypes {
    title: string;
    subtitle: string;
    book: string;
    author: string;
    link: string;
    navItem: string;
}
interface Sizes {
    small: string;
    default: string;
}
interface FontTypesSize {
    title: Sizes;
    subtitle: Sizes;
    book: Sizes;
    author: Sizes;
    link: Sizes;
    navItem: Sizes;
}

interface ColorIntensity {
    100: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
        fonts: {
            family: FontTypes;
            size: FontTypesSize;
        };
        palette: {
            red: ColorIntensity;
            blue: ColorIntensity;
            green: ColorIntensity;
            yellow: ColorIntensity;
            purple: ColorIntensity;
            gray: ColorIntensity;
            white: string;
        };
        shadow: string;
    }
}
