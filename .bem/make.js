/*global MAKE:true */

"use strict";

// process.env.YENV = 'production';

require('bem-tools-autoprefixer').extendMake(MAKE);

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
                branch: 'support/2.x'
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
            'roole',
            'css',
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('roole');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});

MAKE.decl('AutoprefixerNode', {

    getPlatform : function() {
        return this.output.split('.')[0];
    },

    getBrowsers : function() {
        return ['last 2 versions'];
    }

});

MAKE.decl('BundlesLevelNode', {
    buildMergedBundle: function() {
        return true;
    }
});
