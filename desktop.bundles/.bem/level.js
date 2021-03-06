var BEM = require('bem');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../bem-controls/common.blocks',
            '../../bem-controls/desktop.blocks',
            '../../bl-carousel/desktop.blocks',
            '../../common.blocks',
            '../../desktop.blocks'
        ])
    });

};
