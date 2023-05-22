const fs = require('node:fs')
const colors = require('colors')

//Promise
//const crearArchivo = (base = 1) => {
//   return new Promise((resolve, reject) => {
//     console.clear()
//     console.log(`=============================`)
//     console.log(` TABLA ${base}`)
//     console.log(`=============================`)

//     let salida = ''
//     for (let i = 1; i <= 12; i++) {
//       salida += `${base} x ${i} = ${base * i} \n`
//     }
//     console.log(salida)
//     fs.writeFileSync(`tabla-${base}.txt`, salida)
//     resolve(`tabla-${base}.txt`)
//   })
// }

//Async
const crearArchivo = async (base = 1, listar = false, h = 12) => {
  try {
    let salida = ''
    let consola = ''
    if (listar) {
      for (let i = 1; i <= h; i++) {
        salida += `${base} x ${i} = ${colors.yellow(base * i)} \n`
        consola += `${colors.yellow(base)} ${'x'.magenta} ${colors.yellow(i)} ${
          '='.green
        } ${colors.yellow(base * i)} \n`
      }
      console.clear()
      console.log(`=============================`.magenta)
      console.log(` ${'TABLA'.white} ${colors.blue(base)}`)
      console.log(`=============================`.magenta)
      console.log(consola)
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return `tabla-${base}.txt`
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo,
}
