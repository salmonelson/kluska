import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../styles/theme";
// import createEmotionCache from "../lib/createEmotionCache";
import { StyledEngineProvider } from "@mui/material/styles";

import createCache from "@emotion/cache";
import Layout from "../components/Layout/Layout";
import ErrorBoundary from "../components/ErrorHandling/ErrorBoundary";

//Client-side cache for user per session
const clientSideEmotionCache = createCache({
  key: "css",
  prepend: true,
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ErrorBoundary>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>Kluska</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Layout around Component */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* Layout around Component */}
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </ErrorBoundary>
  );
};

export default App;
