import { ThemeProvider } from "next-themes";
import {} from "react";
import Layout from "../components/Layout";
import NavContext, { NavProvider } from "../components/NavContext";

import "../styles/reset.css";
import "../styles/globals.scss";
import "../styles/theme.css";

export default function App({ Component, pageProps }) {
  return (
    <NavProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NavProvider>
  );
}
