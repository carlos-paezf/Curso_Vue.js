module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guia', link: '/guia/' },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: {
            '/guia/': [
                '',
                'guia-alterna'
            ],
        }
    }
}