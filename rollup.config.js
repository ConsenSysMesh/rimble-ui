import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'rimble',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      name: 'rimble',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    url(),
    svgr({
      ref: true,
      icon: true
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
  ]
}
