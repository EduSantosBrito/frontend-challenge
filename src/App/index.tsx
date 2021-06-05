import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavbarRoute from '../components/NavbarRoute';

const Home = lazy(() => import('../pages/Home'));
const Detail = lazy(() => import('../pages/Detail'));
const Search = lazy(() => import('../pages/Search'));

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 400;
        src: url('/fonts/SF-Pro-Display-400.woff2') format('woff2');
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 400;
        font-style: italic;
        src: url('/fonts/SF-Pro-Display-400-Italic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 600;
        src: url('/fonts/SF-Pro-Display-600.woff2') format('woff2');
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 700;
        src: url('/fonts/SF-Pro-Display-700.woff2') format('woff2');

    }
    @font-face {
        font-family: 'SF Pro Text';
        font-weight: 400;
        src: url('/fonts/SF-Pro-Text-400.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Playfair Display';
        font-weight: 700;
        src: url('/fonts/Playfair-Display-700.woff2') format('woff2');
            
    }
    html, body {
        background-color: ${({ theme }) => theme.palette.yellow[100]};
        font-size: 16px;
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
    }
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
            link: 'SF Pro Display, sans-serif',
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
            link: {
                default: '0.875rem',
                small: '0.625rem',
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
            200: '#BFBEBF',
            300: '#A2A09F',
            400: '#838281',
            500: '#36383A',
        },
        white: '#FEFEFE',
    },
    shadow: '3px 3px 23px #D6D5D1;',
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <NavbarRoute>
                                <Home />
                            </NavbarRoute>
                        </Route>
                        <Route path='/detail'>
                            <Detail />
                        </Route>
                        <Route path='/search'>
                            <NavbarRoute>
                                <Search />
                            </NavbarRoute>
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
