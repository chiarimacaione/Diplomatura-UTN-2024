/* const nombres = ['pepe', 'pedro', 'juan', 'maria']

let posicionMaria = nombres.indexOf('maria')
nombres.splice(posicionMaria, 20)
console.log(nombres) */

/* 
    Hacer una funcion que reciba un array de nombres y un nombreAEliminar y retorne un nuevo array sin nombres igual a nombreAEliminar
    ejemplo:
    eliminarNombres(['pedro', 'predro', 'juan'], 'pedro') 
    debe retornar: ['juan']
*/

function eliminarNombres(array, elemEliminar){
    while (array.includes(elemEliminar)){
        let posElim = array.indexOf(elemEliminar)
        array.splice(posElim, 1)
    }
    return array
}

const nombres = ['Lucia', 'Maria', 'Sofia', 'Milagros']
let nombreAEliminar = 'Sofia'
console.log(nombres)
console.log('Nombre a eliminar: '+ nombreAEliminar)

const resultadoNombres = eliminarNombres(nombres, nombreAEliminar)
console.log(resultadoNombres)

/* Quiero agregar a juan entre pedro y maria */
/* const nombres = ['pedro', 'maria']

const posicionMaria = nombres.indexOf('maria')
nombres.splice(posicionMaria, 0, 'juan', 'carlitos')

console.log(nombres) */