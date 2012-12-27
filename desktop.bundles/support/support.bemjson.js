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
    mods: { page: 'support' },
    content: [
        {
            block: 'container',
            content: [
                {
                    block: 'header',
                    mods: { page: 'support' }
                }
            ]
        },
        {
            block: 'row-fluid',
            mods: { background: 'gray' },
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            block: 'span4',
                            content: {
                                block: 'block',
                                mods: { type: 'contact' },
                                content: [
                                    {
                                       elem: 'h1',
                                       content: 'Contact us'
                                    },
                                    {
                                        elem: 'p',
                                        content: 'We welcome any feedback you have on our product, as well as any specific requests. Our team is on standby to provide the best assistance possible.'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'span8',
                            content: [
                                {
                                    block: 'form',
                                    attrs: { action: '/' },
                                    mods: { type: 'contact' },
                                    content: [
                                        {
                                            elem: 'icon'
                                        },
                                        {
                                            elem: 'title',
                                            content: 'Please, fill the form'
                                        },
                                        {
                                            block: 'input',
                                            name: 'text',
                                            mods: { theme: 'white', size: '330', form: 'contact', type: 'textarea' },
                                            content: [
                                                {
                                                    elem: 'hint',
                                                    content: 'Enter text here...'
                                                },
                                                {
                                                    elem: 'control'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'input',
                                            name: 'name',
                                            mods: { theme: 'white', type: 'input' },
                                            content: [
                                                {
                                                    elem: 'hint',
                                                    content: 'Name'
                                                },
                                                {
                                                    elem: 'control',
                                                    mods: { type: 'input' }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'input',
                                            name: 'email',
                                            mods: { theme: 'white', type: 'input' },
                                            content: [
                                                {
                                                    elem: 'hint',
                                                    content: 'Email'
                                                },
                                                {
                                                    elem: 'control',
                                                    mods: { type: 'input' }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'inner',
                                            mix: [{ block: 'clearfix' }],
                                            content: [
                                                {
                                                    elem: 'notice',
                                                    content: 'All fields are required'
                                                },
                                                {
                                                    block: 'button',
                                                    type: 'submit',
                                                    mods: { size: '35', theme: 'gray', type: 'contact', disabled: 'yes' },
                                                    content: 'Send'
                                                }
                                            ]
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
            page: 'support'
        }
    ]
})