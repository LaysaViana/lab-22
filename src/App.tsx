import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

//import CartProvider from './src/contexts/CartContext';

import Home from "./pages/home";
import { CartContext, CartContextProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </CartContextProvider>

  );
};

export default App;
