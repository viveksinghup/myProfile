// postcss.config.js

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const path = require('path')

module.exports = {
  plugins: {
    tailwindcss: {
      config: "./tailwind.config.js",
    },
    "postcss-import": {
      resolve(id, basedir) {
        // resolve alias @css, @import '@css/style.css'
        // because @css/ has 5 chars
        if (/^@css/.test(id)) {
          return path.resolve('./src/assets/css', id.slice(5))
        }

        // resolve node_modules, @import '~normalize.css/normalize.css'
        // similar to how css-loader's handling of node_modules
        if (/^~/.test(id)) {
          return path.resolve('./node_modules', id)
        }

        // resolve relative path, @import './components/style.css'
        return path.resolve(basedir, id)
      }
    },
    "postcss-mixins": {},
    "postcss-simple-vars": {},
    "postcss-color-function": {},
    "postcss-nested": {},
    "postcss-extend": {},
    "postcss-discard-comments": {},
    "postcss-discard-empty": {},
    "autoprefixer": {},
    "cssnano": {}
  }
}