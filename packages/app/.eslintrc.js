module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
    },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'arrow-parens': ['error', 'as-needed'],
        'class-methods-use-this': 'off',
        curly: ['error', 'multi-line'],
        'import/prefer-default-export': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-console': ['error', {allow: ['warn', 'error']}],
        'no-plusplus': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
        'no-underscore-dangle': 'off',
        'object-curly-spacing': ['error', 'never'],
        'react/destructuring-assignment': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/no-did-update-set-state': 'off',
        'react/require-default-props': 'off',
        'react/sort-comp': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
};
