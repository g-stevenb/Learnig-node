const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Es hasta donde se multiplicara',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un numero'
    }
    return true
  }).argv

module.exports = argv
