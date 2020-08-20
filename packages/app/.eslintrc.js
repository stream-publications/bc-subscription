module.exports = {
  extends: [
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
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
    'import/no-extraneous-dependencies': ['error', {devDependencies: ['**/*.test.tsx']}],
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
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-did-update-set-state': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {char: '>', alternatives: ['&gt;']},
          {char: '}', alternatives: ['&#125;']},
        ],
      },
    ],
    'newline-before-return': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/named': 'off',
    // Remove this when https://github.com/benmosher/eslint-plugin-import/pull/1528 gets released
    'import/default': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      typescript: {
        alwaysTryTypes: true,
        directory: 'packages/*/tsconfig.json',
      },
    },
  },
};
