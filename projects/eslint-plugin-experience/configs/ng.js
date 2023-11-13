module.exports = {
    overrides: [
        {
            files: [
                '*.component.ts',
                '*.service.ts',
                '*.directive.ts',
                '*.pipe.ts',
                '*.module.ts',
            ],
            parser: '@typescript-eslint/parser',
            plugins: ['@angular-eslint/eslint-plugin', '@taiga-ui/experience'],
            rules: {
                '@angular-eslint/component-class-suffix': 'error',
                '@angular-eslint/contextual-decorator': 'error',
                '@angular-eslint/contextual-lifecycle': 'error',
                '@angular-eslint/directive-class-suffix': 'error',
                '@angular-eslint/directive-selector': 'error',
                '@angular-eslint/no-attribute-decorator': 'error',
                '@angular-eslint/no-conflicting-lifecycle': 'error',
                '@angular-eslint/no-empty-lifecycle-method': 'error',
                '@angular-eslint/no-input-prefix': 'error',
                '@angular-eslint/no-lifecycle-call': 'error',
                '@angular-eslint/no-output-native': 'error',
                '@angular-eslint/no-output-on-prefix': 'error',
                '@angular-eslint/no-queries-metadata-property': 'error',
                '@angular-eslint/pipe-prefix': [
                    'error',
                    {
                        prefixes: ['tui'],
                    },
                ],
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',
                '@angular-eslint/prefer-output-readonly': 'error',
                '@angular-eslint/relative-url-prefix': 'error',
                '@angular-eslint/use-lifecycle-interface': 'error',
                '@angular-eslint/use-pipe-transform-interface': 'error',
            },
        },
    ],
};
