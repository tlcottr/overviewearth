import { ThemeProvider } from "next-themes";
import {} from "react";

import "../styles/reset.css";
import "../styles/globals.scss";
import "../styles/theme.css";
import LandingLayout from "../components/LandingLayout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LandingLayout>
        <Component {...pageProps} />
      </LandingLayout>
    </ThemeProvider>
  );
}
