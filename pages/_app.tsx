import type { AppProps } from "next/app";
import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import Head from "next/head";
import Logo from "~/public/logo.png";
import Logo192 from "~/public/logo192.png";
import SocialImage from "~/public/socialImage.jpg";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createEmotionCache from "~/theme/createEmotionCache";
import theme from "~/theme";
import "~/styles/animation.css";
import config from "~/config.json";
import { NextPage } from "next";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp: NextPage<
    AppProps & {
        emotionCache?: EmotionCache;
    }
> = (props) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="apple-touch-icon" href={Logo192.src} />
                <link href={Logo.src} rel="icon" />
                <link href={Logo.src} rel="shortcut icon" />

                <title>{config.defaultTitle}</title>
                <meta content={config.description} name="description" />

                {/* Open Graph Protocol */}
                <meta content={"blog"} property="og:type" />
                <meta content={config.defaultTitle} property="og:title" />
                <meta content={config.url} property="og:url" />
                <meta content={SocialImage.src} property="og:image" />
                <meta content={config.description} property="og:description" />
                <meta content={config.siteName} property="og:site_name" />
                <meta content={"zh_CN"} property="og:locale" />

                {/* Twitter Social Protocol */}
                <meta content="summary_large_image" name="twitter:card" />
            </Head>
            <noscript>
                {"You need to enable JavaScript to run this app."}
            </noscript>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
