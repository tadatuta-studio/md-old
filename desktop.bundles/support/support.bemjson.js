({
    block: 'b-page',
    title: 'Support — Magic Desktop 8',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_support.css', ie: false },
        { elem: 'css', url: '_support', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_support.js' },
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
                                        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
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
                                            elem: 'form-title',
                                            mix: [{ block: 'info-block' , elem: 'form-title' }],
                                            content: 'Please, fill the form'
                                        },
                                        {
                                            block: 'input',
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
                                                    mods: { size: '35', theme: 'gray', type: 'contact' },
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