/*global MAKE:true */

"use strict";

// process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/,

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            },
            'bem-controls': {
                type: 'git',
                url: 'git://github.com/bem/bem-controls.git',
                // treeish: '5b16837bd8908d8f98b9386370183d01d99c8718'
                treeish: 'dev'
            }
        };

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'css',
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];
    }

});

MAKE.decl('BundlesLevelNode', {
    buildMergedBundle: function() {
        return true;
    }
});