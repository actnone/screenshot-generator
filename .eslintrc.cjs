module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/quotes': ['error', 'double', { avoidEscape: true }],
    // Optional props are typed by TypeScript, so they don't need defaultProps.
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.ts', '**/*.test.tsx', 'src/setupTests.ts'],
    }],
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  ],
};
