({
    block: 'b-page',
    title: 'Support — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '../merged/_merged.css', ie: false },
        { elem: 'css', url: '../merged/_merged', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '../merged/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: 'privacypolicy' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'privacypolicy' }
                },
                {
                    block: 'row-fluid',
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block',
                                content: [
                                    {
                                       elem: 'h1',
                                       content: 'Easybits Kids Privacy Policy'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            content: [
                                {
                                    block: 'content',
                                    content: [
                                        {
                                            elem: 'h3',
                                            mods: { position: 'first' },
                                            content: 'Dear customer,'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'We in EasyBits Kids believe that privacy is one of the biggest issues of the Internet era. Our privacy policy is probably one of the most strict that you have ever met. We simply do NOT collect any personal information from you through any of our product lines.'
                                        },
                                        {
                                            elem: 'p',
                                            content: "We distinguish you among other customers by your license number (automatically issued by our server) and a PIN code you choose and give us or a unique hash generated when you acquire a license. That's it – NO personally identifiable information at all!"
                                        },
                                        {
                                            elem: 'p',
                                            content: "We protect kids' privacy as well by NOT collecting personally identifiable information, such as a full name or email address, or NOT posting messages nor submissions that contain personally identifiable information."
                                        },
                                        {
                                            elem: 'p',
                                            content: 'If we are contacted via email, we only use the email address to respond to your query (i.e. only done on a one-time basis).'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            page: 'privacypolicy'
        }
    ]
})