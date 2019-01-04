/**
 * Build script
 *
 * Dimitris Grammatikogiannis November 2019
 * 
 * License MIT
 */
const package = require('./package.json');
const options = package.params;
const kleur = require('kleur');
const minifySettings = require('./build-tools/minify-settings').default
const browserSettings = require('./build-tools/current-settings').default
const _compileCss = require('./build-tools/compile-css').run

/**
 * 
 * @param {string} value 
 */
const parseBoolean = (value) => {
  return value === true || value === "true"
}

/**
 * 
 */
const browsersInputFiles = [
  './src/template'
]

/**
 * 
 * @param {string} file 
 * @param {object} flags 
 * @param {array}  opts 
 */
const compile = async (file, flags, opts) => {
  await _compileCss(file, flags, opts)
}

process.stdout.write(kleur.blue(`Autoprefixing for   ${options.browsers} browsers 🚑 `) + "\n");
process.stdout.write(kleur.blue(`CustomProperties:   ${parseBoolean(options.customProperties) === true ? kleur.green('true  ✅\n') : kleur.green('false ❌\n')}`));
process.stdout.write(kleur.blue(`ColorFunction:      ${parseBoolean(options.colorFunction) === true ? kleur.green('true  ✅\n') : kleur.green('false ❌\n')}`));
process.stdout.write(kleur.blue(`CustomSelectors:    ${parseBoolean(options.customSelectors) === true ? kleur.green('true  ✅\n') : kleur.green('false ❌\n')}`));
process.stdout.write(kleur.blue(`Sourcemaps:         ${parseBoolean(options.sourcemaps) === true ? kleur.green('true  ✅\n') : kleur.green('false ❌\n')}`));
process.stdout.write(kleur.blue(`Compress:           ${parseBoolean(options.compress) === true ? kleur.green('true  ✅\n') : kleur.green('false ❌\n')}`));

browsersInputFiles.forEach(file => {
  const flags = {
    minify: true,
    minOpts: minifySettings
  }
  compile(file, flags, browserSettings)
})
