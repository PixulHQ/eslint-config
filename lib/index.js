'use strict';

module.exports = {
    extends       : [
        'plugin:n/recommended',
        'plugin:@hapi/module'
    ],
    parserOptions : {
        ecmaVersion : 2021
    },
    rules         : {
        'n/no-path-concat'                  : 'error',
        'n/prefer-global/buffer'            : ['error', 'always'],
        'n/prefer-global/process'           : ['error', 'always'],
        'n/prefer-global/url'               : ['error', 'always'],
        'n/prefer-global/url-search-params' : ['error', 'always'],
        'n/prefer-global/text-decoder'      : ['error', 'always'],
        'n/prefer-global/text-encoder'      : ['error', 'always'],
        'no-console'                        : 1,
        'key-spacing'                       : [
            1, {
                beforeColon : true,
                afterColon  : true,
                mode        : 'minimum'
            }
        ]
    }
};
