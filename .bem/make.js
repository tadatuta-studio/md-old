/*global MAKE:true */

"use strict";

// process.env.YENV = 'production';

MAKE.decl('Arch', {

    getCachePolicy: function() {
        return {
            cache: true,
            except: ['desktop.blocks']
        };
    },

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
                treeish: 'f22c0a81116aecf557c4c36c7d5bca20d82cea1d'
            },
            'bl-carousel': {
                type: 'git',
                url: 'git://github.com/tadatuta/bl-carousel.git',
                branch: 'master'
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
