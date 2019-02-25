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
    ]
  },
  env: {
    'jest/globals': true
  }
};
