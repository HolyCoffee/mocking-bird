module.exports = {
    root: true,
    ignorePatterns: ['/dist', '.*.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'import'],
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'import/order': [
          'error',
          {
              pathGroups: [
                  {
                      pattern: '#/**',
                      group: 'internal',
                  },
                  {
                      pattern: '~/**',
                      group: 'internal',
                  },
              ],
              groups: [
                  ['builtin', 'external'],
                  ['internal', 'parent', 'sibling', 'index', 'object'],
              ],
              'newlines-between': 'always-and-inside-groups',
          },
        ],
        'no-duplicate-imports': 'error',
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
        '@typescript-eslint/explicit-module-boundary-types': ['warn', { allowArgumentsExplicitlyTypedAsAny: true }],
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 'warn',
        'no-console': ['warn', { allow: ['warn', 'error'] }],

        // Отключаем базовое правило no-shadow в пользу
        // такого же, но более корректного из typescript-eslint
        // https://git.io/Ju0pZ
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off', // В js файлах можно использовать require(...)
            },
        },
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
};