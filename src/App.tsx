import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { CartProvider } from './contexts/CartContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />

          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
