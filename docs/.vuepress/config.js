module.exports = {
    dest: 'dist',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'alterlinux-doc',
            description: 'The AlterLinux Document'
        },
        '/ja/': {
            lang: 'ja',
            title: 'alterlinux-doc',
            description: 'AlterLinux ドキュメント'
        }
    },
    head: [
        // ['link', { rel: 'icon', href: `/logo.png` }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
        // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        logo: '/logo.png',
        repo: 'FascodeNet/alterlinux',
        repoLabel: 'GitHub',
        editLinks: true,
        docsRepo: 'FascodeNet/alterlinux-doc',
        docsDir: 'docs',
        smoothScroll: true,
        searchPlaceholder: 'Search...',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    { text: 'About', link: '/about/' },
                    { text: 'Build', link: '/build/' },
                    { text: 'Package', link: '/package/' }
                ],
                sidebar: {
                    '/build/': [
                        ['', 'Build'],
                        ['config', 'Config'],
                        ['docker', 'Docker'],
                        ['channel', 'Channel'],
                        ['kernel', 'Kernel']
                    ],
                    '/about/': [
                        ['', 'About AlterLinux'],
                        ['contributing', 'Contributing']
                    ],
                    '/package/': [
                        ['', 'Packages'],
                        ['software', 'Software']
                    ]
                }
            },
            '/ja/': {
                label: '日本語',
                selectText: '言語',
                ariaLabel: '言語を選択',
                editLinkText: 'GitHubでこのページを編集する',
                lastUpdated: '最終更新',
                nav: [
                    { text: 'About', link: '/ja/about/' },
                    { text: 'Build', link: '/ja/build/' },
                    { text: 'Package', link: '/ja/package/' }
                ],
                sidebar: {
                    '/ja/build/': [
                        ['', 'Build'],
                        ['config', 'Config'],
                        ['docker', 'Docker'],
                        ['channel', 'Channel'],
                        ['kernel', 'Kernel']
                    ],
                    '/ja/about/': [
                        ['', 'AlterLinuxについて'],
                        ['contributing', 'Contributing']
                    ],
                    '/ja/package/': [
                        ['', 'Packages'],
                        ['software', 'Software']
                    ]
                }
            }
        }
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ]
}