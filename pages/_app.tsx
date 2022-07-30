import type { AppProps } from "next/app";
import type { NextPage } from "next";
import React from "react";
import "~/styles/global.scss";
import Head from "next/head";

import config from "~/config.json";
import Logo from "~/public/logo.png";
import Logo192 from "~/public/logo192.png";
import SocialImage from "~/public/socialImage.jpg";

const MyApp: NextPage<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <>
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
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
