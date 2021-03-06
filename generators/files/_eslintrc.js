module.exports = (data) => {
    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.updateFile('.eslintrc', 4, {
        // 'extends': 'eslint:recommended',
        env: {
            es6: true
        },

        globals: {
        },

        rules: {
            // POSSIBLE ERRORS
            'comma-dangle': 2, // RECOMMENDED
            'no-cond-assign': 2, // RECOMMENDED
            'no-console': 1, // RECOMMENDED
            'no-constant-condition': 2, // RECOMMENDED
            'no-control-regex': 2, // RECOMMENDED
            'no-debugger': 1, // RECOMMENDED
            'no-dupe-args': 2, // RECOMMENDED
            'no-dupe-keys': 2, // RECOMMENDED
            'no-duplicate-case': 2, // RECOMMENDED
            'no-empty': 2, // RECOMMENDED
            'no-empty-character-class': 2, // RECOMMENDED
            'no-ex-assign': 2, // RECOMMENDED
            'no-extra-boolean-cast': 2, // RECOMMENDED
            'no-extra-parens': 0,
            'no-extra-semi': 2, // RECOMMENDED
            'no-func-assign': 2, // RECOMMENDED
            'no-inner-declarations': 2, // RECOMMENDED
            'no-invalid-regexp': 2, // RECOMMENDED
            'no-irregular-whitespace': 2, // RECOMMENDED
            'no-negated-in-lhs': 2, // RECOMMENDED
            'no-obj-calls': 2, // RECOMMENDED
            'no-regex-spaces': 2, // RECOMMENDED
            'no-sparse-arrays': 2, // RECOMMENDED
            'no-unexpected-multiline': 2, // RECOMMENDED
            'no-unreachable': 2, // RECOMMENDED
            'use-isnan': 2, // RECOMMENDED
            'valid-jsdoc': 0,
            'valid-typeof': 2, // RECOMMENDED

            // BEST PRACTICES
            'accessor-pairs': 0,
            'array-callback-return': 2,
            'block-scoped-var': 2,
            'complexity': [1, 2],
            'consistent-return': 0,
            'curly': 2
        }
    })
}