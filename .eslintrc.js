module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'prettier/react',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'css-modules',
    'jest',
    'jsx-a11y',
    'prettier',
    'react-hooks',
    'testing-library',
  ],
  rules: {
    semi: 'off',
    camelcase: 'off',
    curly: ['error', 'multi-line', 'consistent'],
    'css-modules/no-undef-class': 2,
    'css-modules/no-unused-class': 1,
    'jsx-a11y/control-has-associated-label': ['warn', { ignoreElements: ['th'] }],
    'jsx-a11y/label-has-associated-control': 'warn',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': ['error', { array: false }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.*',
          '**/__tests__/*.*',
          '**/*.test.*',
          '**/*.spec.*',
          '**/*.stories.*',
          '**/*.config.*',
          '**/tests/**/*',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true },
    ],
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': [
      'error',
      {
        ignore: [
          'className',
          'style',
          'location', // react-router
          'history', // react-router
          'route', // react-router
          'match', // react-router
          'dispatch', // redux
        ],
      },
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'static-variables',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  globals: {
    window: true,
    document: true,
    FileReader: true,
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
      },
    },
  ],
}
