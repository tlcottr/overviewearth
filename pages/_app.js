import { ThemeProvider } from "next-themes";
import {} from "react";

import "../styles/reset.css";
import "../styles/globals.scss";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
