module.exports = {
  plugins: [
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-transform-react-display-name'
  ],
  env: {
    development: {
      sourceMaps: 'inline',
      retainLines: true
    },
    nodePackage: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  },
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'IE > 10', 'safari > 6']
        }
      }
    ],
    '@babel/preset-react'
  ]
};
