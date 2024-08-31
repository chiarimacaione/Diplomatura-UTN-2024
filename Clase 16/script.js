/* 
1)
Crear una funcion que reciba un array de letras y se encargue de devolver un string con todas las letras concatenadas
Ejemplo:
concatenar(['a', 'b', 'c'])
devolvera 'abc'

// 1)
function concatCaracteres(array){
    let resultado = ''
    for (let i = 0; i < array.length; i++){
        resultado += array[i]
    }
    return resultado
}

const listaLetras = ['c','h','m','c','h','m','c','h','m']
resultado = concatCaracteres(listaLetras)
console.log(resultado)


2)
Crear una funcion que reciba un array de numeros y devuelva el mayor de todos
Ejemplo:
mayor([2, 3, 4, 5, 6])
devolvera 6

// 2)
function mayor(array){
    let mayor = Number(null)
    for (elemento of array){
        if (elemento >= mayor){
            mayor = elemento
        }
    }
    return mayor
}

const numeros = [2, 3, 4, 9, 5, 6]
let nroMayor = mayor(numeros)
console.log(nroMayor)


3)
Crear una funcion llamada calcular, que reciba una operacion (la cual puede ser '+', '-', '*', '/') y dos numeros y devuelva el resultado de la operacion
Ejemplo:
calcular('+', 2, 3)
devolvera 5
 */

// 3)
function calcular(operacion, nro1, nro2){
    if (operacion == '+'){
        return (nro1 + nro2)
    }
    else if (operacion == '-'){
        return (nro1 - nro2)
    }
    else if (operacion == '*'){
        return (nro1 * nro2)
    }
    else if (operacion == '/'){
        return (nro1 / nro2)
    }
    else{
        return 'Reintente'
    }
}

let operacion = '/'
let nro1 = 9
let nro2 = 3

let resultado = calcular(operacion, nro1, nro2)
console.log(resultado)