import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
    blue: 'blue',
};

const App = () => {
    return <ThemeProvider theme={theme}>teste</ThemeProvider>;
};

export default App;
