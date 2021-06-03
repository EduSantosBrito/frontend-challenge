import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 400;
        src: 
            url('/fonts/SF-Pro-Display-400.woff2') format('woff2'),
            url('/fonts/SF-Pro-Display-400.woff') format('woff');
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 400;
        font-style: italic;
        src: 
            url('/fonts/SF-Pro-Display-400-Italic.woff2') format('woff2'),
            url('/fonts/SF-Pro-Display-400-Italic.woff') format('woff');
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 600;
        src: 
            url('/fonts/SF-Pro-Display-600.woff2') format('woff2'),
            url('/fonts/SF-Pro-Display-600.woff') format('woff');
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 700;
        src: 
            url('/fonts/SF-Pro-Display-700.woff2') format('woff2'),
            url('/fonts/SF-Pro-Display-700.woff') format('woff');

    }
    @font-face {
        font-family: 'SF Pro Text';
        font-weight: 400;
        src: 
            url('/fonts/SF-Pro-Text-400.woff2') format('woff2'),
            url('/fonts/SF-Pro-Text-400.woff') format('woff');
    }
    @font-face {
        font-family: 'Playfair Display';
        font-weight: 700;
        src: 
            url('/fonts/Playfair-Display-700.woff2') format('woff2'),
            url('/fonts/Playfair-Display-700.woff') format('woff');
    }
    font-size: 16px;
`;

const theme: DefaultTheme = {
    breakpoints: {
        xs: '25rem',
        sm: '50rem',
        md: '85rem',
        lg: '105rem',
    },
    fonts: {
        family: {
            title: 'SF Pro Display, sans-serif',
            subtitle: 'SF Pro Display, sans-serif',
            author: 'SF Pro Display, sans-serif',
            book: 'Playfair Display, sans-serif',
        },
        size: {
            title: {
                default: '1.5rem',
                small: '1.125rem',
            },
            subtitle: {
                default: '1rem',
                small: '0.75rem',
            },
            author: {
                default: '0.875rem',
                small: '0.625rem',
            },
            book: {
                default: '1.6875rem',
                small: '1.25rem',
            },
        },
    },
    palette: {
        red: {
            100: '#FF6978',
        },
        blue: {
            100: '#4ABDF1',
            200: '#00173D',
        },
        green: {
            100: '#EEF5DB',
        },
        yellow: {
            100: '#FFFCF9',
            200: '#FFF6E5',
        },
        purple: {
            100: '#451475',
        },
        gray: {
            100: '#CFCBD2',
            200: '#A2A09F',
            300: '#838281',
            400: '#36383A',
        },
        white: '#FEFEFE',
    },
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default App;
