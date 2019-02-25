module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'import/prefer-default-export': 0
  }
};
