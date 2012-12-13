({
    block: 'b-page',
    title: 'Support',
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
    content:[
        {
            block: 'header',
            mods: { page: 'support' }
        },
        {
            block: 'info-block',
            mix: [{ block: 'clearfix' }],
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Contact us'
                                },
                                {
                                    elem: 'description',
                                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
                                }
                            ]
                        },
                        {
                            elem: 'right',
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
            block: 'footer'
        }
    ]
})