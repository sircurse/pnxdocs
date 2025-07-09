const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    defaultShowCopyCode: true,
    unstable_contentDump: true,
    staticImage: true,
    latex: true,
});

module.exports = withNextra({
    i18n: {
        locales: ['en-US', 'fr-FR', 'tr-TR'], // Zh-CN is not supported now
        defaultLocale: 'en-US',
        localeDetection: true,
    }
})