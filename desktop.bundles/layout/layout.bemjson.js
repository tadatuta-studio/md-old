([
'@{',
'    RouteData routeData = RouteTable.Routes.GetRouteData(Context);',
'    string controller = (string)routeData.Values["controller"];',
'    string action = (string)routeData.Values["action"];',
'',
'    string pagename = controller == "Home" ? action.ToLowerInvariant() : controller.ToLowerInvariant();',
'}',
{
    block: 'b-page',
    title: '@(ViewBag.Title ?? "Magic Desktop")',
    favicon: '@Url.Content("~/favicon.ico")',
    head: [
        { elem: 'css', url: '~/content/_merged.css', ie: false },
        { elem: 'css', url: '~/content/_merged.ie7.css', ie: 'lte IE8' },
        { elem: 'css', url: '~/content/_merged.ie9.css', ie: 'IE9' },
        { block: 'i-jquery', elem: 'core' },
        {
            tag: 'script',
            content: 'typeof jQuery == \'undefined\' && document.write(unescape("%3Cscript src=\'~/scripts/jquery-1.7.2.min.js\'%3E%3C/script%3E"));'
        },
        { elem: 'js', url: '~/scripts/_merged.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    mods: { page: '@pagename' },
    content:[
        {
            block: 'header',
            mods: { page: '@pagename', border: 'yes' }
        },
        '@RenderBody()',
        {
            block: 'footer',
            mods: { page: '@pagename' }
        }
    ]
}
])