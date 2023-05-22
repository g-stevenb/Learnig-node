const { crearArchivo } = require('./helpers/multiplicacion')
const argv = require('./config/yargs')

console.clear()

console.log(process.argv)
console.log(argv)
// console.log('base: yargs', argv.base)

//sin argv
// // console.log(process.argv)
// const [, , bs = 'base=5'] = process.argv
// // console.log(bs)
// const [, bs2 = 5] = bs.split('=')
// const name=''
// // console.log(bs2)
// const base = bs2

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, 'Creado'))
  .catch((err) => console.log(err))
