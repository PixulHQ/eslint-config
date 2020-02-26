'use strict';

module.exports = {
    extends       : [
        '@hapi/hapi'
    ],
    parserOptions : {
        ecmaVersion : 2020
    },
    plugins       : [
        'security'
    ],
    rules: {
        'key-spacing': 'off'
    }
};
