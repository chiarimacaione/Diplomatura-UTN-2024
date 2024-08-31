/* let nombre = 'pepe'
let apellido = 'suarez'
let edad = 26

console.log('Hola, mi nombre es ' + nombre + ' y mi apellido es ' + apellido + ' y tengo ' + edad + ' años')

console.log(`Hola, mi nombre es ${nombre} y mi apellido es ${apellido} y tengo ${edad} años`)

const cliente = {
    nombre: 'maria',
    apellido: 'reinado',
    'edad actual': 26
}

console.log(`Hola, mi nombres es ${cliente.nombre} y mi apellido es ${cliente.apellido} y tengo ${cliente['edad actual']}` )
 */
/* 
//Obtener un array de strings con las claves/propiedades de mi objetos
console.log(Object.keys(cliente))

//Obtener un array con los valores de mi objeto ordenado por el orden de declaracion
console.log(Object.values(cliente)) 
*/
let nombre = 'juan'
//                               0            1          2
/* const usuarios_conectados = ['Profe UTN', 'Augusto', 'Alejandro', nombre]
 */
const usuarios_conectados = [
    {
        nombre: 'Profe UTN',
        id: 1,
        isAdmin: true,
        isMuted: false,
        isOnCamara: false,
        image: 'http://direccion-imagen.jpg'
    },
    {
        nombre: 'Augusto',
        id: 2,
        isAdmin: false,
        isMuted: false,
        isOnCamara: false,
        image: 'http://direccion-imagen.jpg'
    },
    {
        nombre: 'Alejandro',
        id: 3,
        isAdmin: false,
        isMuted: false,
        isOnCamara: false,
        image: 'http://direccion-imagen.jpg'
    }
]
usuarios_conectados.push({
    nombre: 'Marcelo',
    id: 4,
    isAdmin: false,
    isMuted: false,
    isOnCamara: false,
    image: 'http://direccion-imagen.jpg'
})
/* 
usuarios_conectados[1] = 'Mateo Devola'
console.log(usuarios_conectados[1])
console.log(usuarios_conectados) 
*/
//Listar a los usuarios conectados

for(const usuario of usuarios_conectados){
    console.log(`${usuario.nombre} esta conectado`)
}

/* 
Esto hace el for of por detras
{
    let usuario = usuarios_conectados[0]
    console.log(usuario + ' esta conectado')
}

{
    let usuario = usuarios_conectados[1]
    console.log(usuario + ' esta conectado')
}

{
    let usuario = usuarios_conectados[2]
    console.log(usuario + ' esta conectado')
}

{
    let usuario = usuarios_conectados[3]
    console.log(usuario + ' esta conectado')
} 
    */



//Metodos de string

//['p', 'e', 'p', 'e']

/* let nombre = 'pepe'


console.log(nombre[0])
console.log(nombre.length)
 */
/* console.log(mensaje.includes("hola")) */
/* 
console.log(mensaje.toUpperCase())
mensaje = mensaje.toLowerCase()
console.log(mensaje) */

/* let mensaje = 'HoLa a todos, como estan?'
let palabraBuscada = 'hOla'
 */
/* mensaje = mensaje.toLowerCase()
palabraBuscada = palabraBuscada.toLowerCase()

console.log(mensaje.includes(palabraBuscada)) */

/* let resultado = mensaje.toLowerCase().includes(palabraBuscada.toLowerCase())
console.log(resultado) */

/* console.log(buscarPalabraEnString('CoMo', mensaje))

function buscarPalabraEnString (palabraBuscada, string){
    let stringLowerCase = string.toLowerCase()
    let palabraBuscadaLowerCase = palabraBuscada.toLowerCase()
    return stringLowerCase.includes(palabraBuscadaLowerCase)
} */

/* let mensaje = 'HoLa a todos, como estan?, todos estan bien?'
 */

/* console.log(mensaje.replace('todos', 'todas'))
console.log(mensaje.replaceAll('todos', 'todas')) */

//Elimina los espacios dobles de los bordes (final e inicio)
/* console.log(mensaje.trim()) */


/* let nombre = 'pepe' */

/* recibe un numero y repite el string en base a ese numero  */
/* console.log(nombre.repeat(10)) */

//trae el caracter en la posicion 0
/* console.log(nombre.charAt(0)) */

//Nos permite transformar un string en un array
/* let mensajeArray = mensaje.split(' ') */
/* mensajeArray.push('juan') */

/* console.log(`En el mensaje hay ${mensajeArray.length} palabras`) */


/* let mesnaje2 = 'Hola%20como%20estas'

console.log(mesnaje2.split('')) */

/* let mensaje = 'HoLa a todos,  como estan?,  todos  estan  bien?' */

//Arrow function

//Verificar si es un numero

console.log(verificarNumero(10))
console.log(verificarNumero('pepe'))

/* function verificarNumero (numero){
    return !isNaN(numero)
} */



const verificarNumero = (numero) => {
    return !isNaN(numero)
}
/* const verificarNumero = (numero) => {
    return !isNaN(numero)
} */