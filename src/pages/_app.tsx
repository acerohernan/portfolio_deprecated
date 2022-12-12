import type { AppProps } from "next/app";
import { LanguageProvider } from "../i18n/context";
import "../index.css";
import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
