const nested = require('postcss-nested');
const mixins = require('postcss-mixins');
const vars = require('postcss-simple-vars');
const cssnano = require('cssnano');
const tailwind = require('tailwindcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const omitImportTilde = require('postcss-omit-import-tilde');

module.exports = {
  plugins: [
    mixins(),
    omitImportTilde(),
    atImport(),
    nested(),
    vars(),
    cssnano(),
    autoprefixer(),
    tailwind(),
  ],
};
