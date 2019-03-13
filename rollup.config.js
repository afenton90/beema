import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjsPlugin from 'rollup-plugin-commonjs';
import jsonPlugin from 'rollup-plugin-json';

const babelConfig = require('./.babelrc');
const { dependencies = {}, peerDependencies = {} } = require('./package.json');

const external = Object.keys({ ...peerDependencies, ...dependencies });

export default [
  {
    input: {
      Avatar: './src/avatar/index.jsx',
      Button: './src/button/index.jsx',
      Card: './src/card/index.jsx',
      Checkbox: './src/checkbox/index.jsx',
      Divider: './src/divider/index.jsx',
      Dotnav: './src/dotnav/index.jsx',
      Input: './src/input/index.jsx',
      'index.es': './src/index.js'
    },
    output: {
      dir: './dist',
      format: 'esm'
    },
    external,
    plugins: [
      babel({
        ...babelConfig,
        exclude: /node_modules/
      }),
      jsonPlugin(),
      nodeResolve({
        extensions: ['.js', '.jsx', '.json', '.scss', '.md']
      }),
      commonjsPlugin({
        include: /node_modules/,
        ignoreGlobal: true
      })
    ]
  }
];
