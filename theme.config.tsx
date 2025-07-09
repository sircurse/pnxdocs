import React, {useEffect, useState} from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
    logo: () => {
        return (
            <span className="text-2xl font-bold">
                <img src="/img/PNX_LOGO_sm.png" alt="PowerNukkitX Logo" width="50" height="50"/>
            </span>
        )
    },
    project: {
        link: 'https://github.com/PowerNukkitX/PowerNukkitX',
    },
    chat: {
        link: 'https://discord.com',
    },
    darkMode: true,
    docsRepositoryBase: 'https://github.com/PowerNukkitX/docs',
    footer: {
        component: function () {
            return <></>
        }
    },
    primarySaturation: 0,
    head: function useHead() {

        const description = "PowerNukkitX Docs"
        const title = "PowerNukkitX - Docs"

        return (
            <>
                <meta name="title" content={title}/>
                <meta name="description"
                      content={description}/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://v2.powernukkitx.com/team"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description"
                      content={description}/>
                <meta property="og:image" content=""/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="100"/>
                <meta property="og:image:height" content="100"/>

                <meta property="twitter:url" content="https://v2.powernukkitx.com/team"/>
                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description"
                      content={description}/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link rel="shortcut icon" href={"/favicon.svg"} type="image/svg+xml"/>
                <link rel="apple-touch-icon" href={"/favicon.svg"} type="image/svg+xml"/>
            </>
        )
    },
    useNextSeoProps() {
        const {asPath, pathname, query} = useRouter();

        if (['/'].includes(asPath)) {
            return { titleTemplate: 'PowerNukkitX | Docs' };
        }

        return { titleTemplate: '%s | Docs' };
    },
    editLink: {
        text: "Edit this page on GitHub",
    },
    sidebar: {
        toggleButton: true,
        defaultMenuCollapseLevel: 1,
    },
    toc: {
        float: true,
        backToTop: true,
    },
    i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: 'fr-FR', text: 'Français' },
        { locale: 'tr-TR', text: 'Türkçe' },
    ]
}

export default config