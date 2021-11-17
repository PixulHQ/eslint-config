'use strict';

module.exports = {
    extends       : [
        'plugin:node/recommended',
        'plugin:@hapi/module'
    ],
    parserOptions : {
        ecmaVersion : 2021
    },
    rules         : {
        'no-console'  : 1,
        'key-spacing' : [
            1, {
                beforeColon : true,
                afterColon  : true,
                mode        : 'minimum'
            }
        ]
    }
};
