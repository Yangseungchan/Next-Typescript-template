import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

import { globalStyles } from "styles/global";
import theme from "styles/theme";

const cache = createCache({ key: "next" });

export default function App({ Component, pageProps }: AppProps) {
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>;
}
