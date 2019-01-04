/**
 * Build script
 *
 * Dimitris Grammatikogiannis November 2019
 * 
 * License MIT
 */
module.exports.default = [
  require('postcss-easy-import')({ extensions: '.pcss' }),
  require('postcss-mixins'),
  require('postcss-custom-selectors'),
  require('postcss-nesting'),
  require('autoprefixer'),
  require('postcss-custom-media'),
  require('postcss-discard-comments')({ removeAll: true }),
  require('postcss-preset-env')({
    stage: 0,
    autoprefixer: {
      grid: true,
      browsers: [
        'last 1 version', 
        'not last 1 ie version'
      ],
      from: undefined,
    },
    features: {
      'nesting-rules': true,
    },
    removeAll: true
  }),
];
