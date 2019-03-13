module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'jest'],
  rules: {
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.jsx', 'rollup.config.js', './src/preview.jsx'],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0
  },
  env: {
    'jest/globals': true
  }
};
