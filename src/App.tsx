import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

//import CartProvider from './src/contexts/CartContext';

import Home from "./pages/home";

const App = () => {
  return (
    // <CartProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
    // </CartProvider>
  );
};

export default App;
