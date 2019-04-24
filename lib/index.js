'use strict';

module.exports = {
    extends       : [
        '@hapi/hapi'
    ],
    parserOptions : {
        ecmaVersion : 2018
    },
    plugins       : [
        'security'
    ]
};
