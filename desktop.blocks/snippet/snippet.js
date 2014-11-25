BEM.DOM.decl('snippet', {}, {
    getBlockBemjson : function(data) {
        return {
            block : 'snippet',
            content : [
                {
                    elem : 'info',
                    content : [
                        {
                            elem : 'logo',
                            attrs : { src : data.logo }
                        },
                        data.logo ? '<br>' : '',
                        [
                            data.location && (data.location.city && data.location.country) ?
                                'Location: <b>' + ([]
                                    .concat(data.location.city || [])
                                    .concat(data.location.country || [])).join(' / ') + '</b>' :
                                '',
                            data.type ? 'Type: <b>' + data.type.join(', ') + '</b>' : ''
                        ].filter(function(v) { return v; }).join('<br>')
                    ].concat(data.url ? ['<br>', {
                            block : 'b-link',
                            url : data.url,
                            content : data.url
                        }] : [])
                },
                {
                    elem : 'description',
                    content : ['title', 'text'].map(function(key) {
                        return data[key === 'text' ? 'description' : key] ?
                        { elem : key, content : data[key === 'text' ? 'description' : key] } : '';
                    })
                },
                data.image ? {
                    elem : 'picture',
                    attrs : { src : data.image }
                } : ''
            ]
        };
    }
});
