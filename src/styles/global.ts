import * as styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-dark']};
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
