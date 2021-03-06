const path = require('path')
const pkg = require(path.resolve('package.json'))
const external = Object.keys(pkg.dependencies)
const plugins = [,
  require('rollup-plugin-json')({
    include: 'src/**',
    exclude: ['node_modules']
  }),
  require('rollup-plugin-postcss')({
    plugins: [
      require('postcss-flexible')({remUnit: 75}),
      require('postcss-simple-vars')(),
      require('postcss-nested')(),
      require('postcss-cssnext')({warnForDuplicates: false}),
      require('cssnano')(),
      require('postcss-url')({
        url: 'inline'
      }),
      require('postcss-modules')({
        generateScopedName: '[local]__[hash:base64:5]'
      })
    ],
    extensions: ['.css']
  }),
  require('rollup-plugin-node-resolve')({
    jsnext: true,
    main: true,
    browser: true
  }),
  require('rollup-plugin-commonjs')(),
  require('rollup-plugin-babel')({
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  require('rollup-plugin-uglify')()
]

module.exports = {
  plugins,
  external,
  globals: Object.keys(external).map(value => ({[value]: value}))
}
