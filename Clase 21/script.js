// TRES MANERAS DE TRABAJAR CON EVENTOS:

const accion_1 = () => {
    alert('hola has dado click en un botón de la página')
}

// 1. Hacerlo directamente en el archivo HTML

// 2. Mediante el id del elemento HTML
const button2HTML = document.getElementById('btn-2')

button2HTML.onclick = accion_1

// 3. 
const button3HTML = document.getElementById('btn-3')
button3HTML.addEventListener('click', accion_1)


// doble click y accion asociada
button3HTML.addEventListener('dblclick', ()=> {     
    alert('Estás presionando 2 veces')
})


/* 
CONTADOR CON JS y HTML:
Debemos desarrollar la funcionalidad de este contador:
HTML inicial:
<div>
    <button id="btn-decrementar" >-</button>
    <span id="contador-text" >0</span>
    <button id="btn-incrementar" >+</button>
</div>

Funcionalidades:
Llamar al span y mostrar inicialmente el texto interno en 0
llamar al boton de suma y resta y les asociaran respectivamente sus funciones

CONSEJO:
-Cada vez que sume o reste debo actualizar el innerText del span
-Crear una variable global que contenga el valor del contador
*/
/*
const btnRestar = document.getElementById('btn-decrementar')
const btnSumar = document.getElementById('btn-incrementar')
const contador = document.getElementById('contador-text')

let valorActual = 0
contador.innerText = valorActual

btnRestar.addEventListener('click', ()=>{
    contador.innerText --
    valorActual = Number(contador.innerText)
})

btnSumar.addEventListener('click', ()=>{
    contador.innerText ++
    valorActual = Number(contador.innerText)
})
*/
/*
Parte 2:
El contador no puede ser menor a 1, en caso de que el contador sea 1 deberemos hacer que NO se ejecute la resta
El contador no puede ser mayor de 10, en caso de que el contador sea 10 NO ejecutaremos la suma


const btnRestar = document.getElementById('btn-decrementar')
const btnSumar = document.getElementById('btn-incrementar')
const contador = document.getElementById('contador-text')

let valorActual = 1
contador.innerText = valorActual

btnRestar.addEventListener('click', ()=>{
    if (contador.innerText > 1){
        contador.innerText --
    }
    else {
        alert('El contador no puede ser menor a 1')
    } 
    valorActual = Number(contador.innerText)
})

btnSumar.addEventListener('click', ()=>{
    if (contador.innerText < 10){
        contador.innerText ++
    }
    else {
        alert('El contador no puede ser mayor de 10')
    }
    valorActual = Number(contador.innerText)
})
*/


/*
Parte 3:

Vamos a agregar un span de error en el contador, el span incialmente esta vacio:

<div class="contador">
    <button id="btn-decrementar" >-</button>
    <span id="contador-text" >0</span>
    <button id="btn-incrementar" >+</button>
    <span class="error-text"></span>
</div>

Si el usuario intenta incrementar a mas de 10 o decrementar a menos de 1
el texto de el span de error debe mostrar: "El contador no puede ser mayor de 10" o "El contador no puede ser menor a 1" segun corresponda

Si el usuario luego de que le de el error deja de cometerlo, ejemplo:
le dio al mas cuando estaba en 10, se mostro el texto de error pero luego le dio al menos (ahora el contador vale 9) entonces el TEXTO DE ERROR DEBE SER '' otra vez

const btnRestar = document.getElementById('btn-decrementar')
const btnSumar = document.getElementById('btn-incrementar')
const contador = document.getElementById('contador-text')
const mjeError = document.getElementById('error-text')

let valorActual = 1
contador.innerText = valorActual

btnRestar.addEventListener('click', ()=>{
    if (contador.innerText > 1){
        contador.innerText --
        mjeError.innerText = ''
    }
    else {
        mjeError.innerText = 'El contador no puede ser menor a 1'
    } 
    valorActual = Number(contador.innerText)
})

btnSumar.addEventListener('click', ()=>{
    if (contador.innerText < 10){
        contador.innerText ++
        mjeError.innerText = ''
    }
    else {
        mjeError.innerText = 'El contador no puede ser mayor de 10'
    }
    valorActual = Number(contador.innerText)
})
*/

// Con este formato, nos aseguramos de que se renderice cada vez que se modifique el valor del contador:

/* const botonRestar = document.getElementById('btn-decrementar')
const botonSumar = document.getElementById('btn-incrementar')
const contador = document.getElementById('contador-text')
const mensajeError = document.getElementById('error-text')

const setContador = (nuevoValorContador) => {
    valorActual = nuevoValorContador
    contador.innerText = valorActual
}

let valorActual 
setContador(4)
mensajeError.innerText = ''

botonRestar.addEventListener('click', () => {
    if (valorActual === 1) {
        mensajeError.innerHTML = 'El contador no puede ser menor que 1'
    } else {
        setContador(valorActual --)
        mensajeError.innerText = ''
    }
})

botonSumar.addEventListener('click', () => {
    if (valorActual === 10) {
        mensajeError.innerHTML = 'El contador no puede ser mayor que 10'
    } else {
        setContador(valorActual ++)
        mensajeError.innerText = ''
    }
}) */

/* 
Parte 4:
Asi como hicimos una funcion set para el contador, podriamos plantearlo para el mensaje de error
Crear un estado de error y una funcion setError para modificar el texto de error
*/

// la función setter se encarga de hacer la actualización del html

const botonRestar = document.getElementById('btn-decrementar')
const botonSumar = document.getElementById('btn-incrementar')
const contador = document.getElementById('contador-text')
const mensajeError = document.getElementById('error-text')

const setContador = (nuevoValorContador) => {
    valorActual = nuevoValorContador
    contador.innerText = valorActual
}

const setMjeError = (mensaje) => {
    mjeError = mensaje
    mensajeError.innerText = mjeError
}

let valorActual
setContador(2)
mensajeError.innerText = ''

botonRestar.addEventListener('click', () => {
    if (valorActual === 1) {
        setMjeError('El contador no puede ser menor que 1')
    } else {
        setContador(valorActual - 1)
        setMjeError('')
    }
})

botonSumar.addEventListener('click', () => {
    if (valorActual === 10) {
        setMjeError('El contador no puede ser mayor que 10')
    } else {
        setContador(valorActual + 1)
        setMjeError('')
    }
})