import React from "react";
import { ThemeProvider } from "theme-ui";
import Nav from "../components/Nav";
import theme from "../theme";

const RootApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default RootApp;
