import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';
import GlobalStyles from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
