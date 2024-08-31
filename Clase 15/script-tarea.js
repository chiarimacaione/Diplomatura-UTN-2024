/* Practica de funciones y bucles:
Crear una funcion llamada sumatoria(cantidad) que recibira un numero llamado cantidad y la funcion solicitara la cantidad de numeros que se indique en el parametro cantidad y los sumara
Ejemplo:
sumatoria(2) solicitara 2 numeros y los acumulara, dara como valor de retorno la suma de los 2 numeros
Si el primer numero es 3 y el segundo 2, el retorno de la funcion debe ser 5
*/

function sumatoria(cantidad) {
    let resultado = 0;
    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt('Número: '));
        resultado += numero;
    }
    return resultado;
}

let cantidad = Number(prompt('Cantidad de números a sumar: '));
let suma = sumatoria(cantidad);
alert('El resultado de la suma es ' + suma);


/*Crear una funcion llamada saludar(nombre), dicha funcion recibira un nombre y retornara un string que sea 'hola {nombre}'
Ejemplo:
saludar('pepe') retornara el string 'hola pepe'
*/

function saludar(nombre){
    return ('hola '+nombre)
}

let nombre = prompt('Nombre:')
alert(saludar(nombre))


/*
Crear una funcion llamada seleccionar, la misma recibirá un string y retornara un valor en base al string recibido
las opciones validas son:
'sumar', '+', 'add' retornara 'SUMAR'
'restar', '-', 'subtract' retornara 'RESTAR'
'multiplicar', '*', 'multiply' retornara 'MULTIPLICAR'
Si no es ninguna de las anteriores debe retornar null */

function seleccionar(valor) {
    if (valor === 'sumar' || valor === '+' || valor === 'add') {
        return 'SUMAR';
    } 
    else if (valor === 'restar' || valor === '-' || valor === 'subtract') {
        return 'RESTAR';
    } 
    else if (valor === 'multiplicar' || valor === '*' || valor === 'multiply') {
        return 'MULTIPLICAR';
    } 
    else {
        return null;
    }
}

let valor = prompt('Operación:');
let operacion = seleccionar(valor);
alert('Resultado: ' + operacion);
