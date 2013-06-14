var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/');


exports.getTechs = function() {

    return {
        'bemjson.js'    : '',
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'v2/deps.js',
        'js'            : 'v2/js-i',
        'css'           : 'v2/css',
        'ie.css'        : 'v2/ie.css',
        'ie6.css'       : 'v2/ie6.css',
        'ie7.css'       : 'v2/ie7.css',
        'ie8.css'       : 'v2/ie8.css',
        'ie9.css'       : 'v2/ie9.css',

        'bemhtml'       : pjoin(PRJ_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs/v2/bemhtml.js'),
        'html'          : pjoin(PRJ_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs/html')
    };

};


// Do not create any techs files during bundle creation by default
exports.defaultTechs = [];

