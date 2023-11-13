module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order'],
    rules: {
        'color-named': 'never',
        'declaration-empty-line-before': 'never',
        indentation: [
            4,
            {
                indentInsideParens: 'once-at-root-twice-in-block',
                severity: 'error',
            },
        ],
        'max-line-length': [
            80,
            {
                ignore: ['non-comments'],
            },
        ],
        'no-duplicate-selectors': true,
        'number-leading-zero': 'never',
        'order/order': [
            'at-variables',
            'less-mixins',
            'declarations',
            {
                selector: '^&\\s\\+\\s\\S',
                type: 'rule',
            },
            {
                selector: '^&:\\w',
                type: 'rule',
            },
            {
                selector: '^&\\[\\w+\\]',
                type: 'rule',
            },
            {
                selector: '^&_[^\\W_]',
                type: 'rule',
            },
            {
                selector: '^&__\\w',
                type: 'rule',
            },
            'rules',
            {
                hasBlock: true,
                name: 'media',
                type: 'at-rule',
            },
        ],
        'order/properties-order': [
            [
                'all',
                'content',
                'position',
                {
                    order: 'flexible',
                    properties: ['top', 'left', 'right', 'bottom'],
                },
                'z-index',
                'display',
            ],
            {
                unspecified: 'bottom',
            },
        ],
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'selector-attribute-quotes': 'always',
        'selector-max-specificity': '0,5,0',
        'selector-pseudo-element-colon-notation': 'single',
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: ['/^/deep/'],
            },
        ],
        'value-keyword-case': 'lower',
        'value-no-vendor-prefix': true,
    },
};
