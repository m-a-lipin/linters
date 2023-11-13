module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', '@taiga-ui/experience'],
            rules: {
                '@taiga-ui/experience/injection-token-description': 'error',
                '@taiga-ui/experience/prefer-inject-decorator': 'error',
                '@taiga-ui/experience/prefer-self-destroy-service': 'error',
                '@taiga-ui/experience/no-typeof': 'error',
                '@taiga-ui/experience/no-private-esnext-fields': 'error',
                '@taiga-ui/experience/no-deep-imports': [
                    'error',
                    {
                        currentProject: '(?<=projects/)([-\\w]+)',
                        ignoreImports: [
                            '\\?raw',
                            '@taiga-ui/testing/cypress',
                            '@taiga-ui/testing/setup-jest',
                        ],
                    },
                ],
                '@taiga-ui/experience/strict-tui-doc-example': 'error',
                '@taiga-ui/experience/no-assert-without-ng-dev-mode': 'error',
                '@taiga-ui/experience/no-simple-for-of': 'error',
                '@taiga-ui/experience/decorator-key-sort': [
                    'error',
                    {
                        Component: [
                            'moduleId',
                            'standalone',
                            'signal',
                            'selector',
                            'imports',
                            'template',
                            'templateUrl',
                            'styleUrls',
                            'styles',
                            'encapsulation',
                            'changeDetection',
                            'providers',
                            'viewProviders',
                            'animations',
                            'entryComponents',
                            'preserveWhitespaces',
                            'interpolation',
                        ],
                        NgModule: [
                            'id',
                            'jit',
                            'imports',
                            'declarations',
                            'providers',
                            'exports',
                            'entryComponents',
                            'bootstrap',
                            'schemas',
                        ],
                        Directive: [
                            'selector',
                            'inputs',
                            'outputs',
                            'providers',
                            'exportAs',
                            'queries',
                            'host',
                            'jit',
                        ],
                        Injectable: ['providedIn'],
                        Pipe: ['name', 'pure'],
                    },
                ],
            },
        },
        {
            files: ['*.spec.ts', '*.cy.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', '@taiga-ui/experience'],
            rules: {
                '@taiga-ui/experience/no-deep-imports': 'off',
            },
        },
    ],
};
