/* // Dado este array de nombres generar este array de objetos (USANDO MAP)

const nombres  = ['pepe', 'juan', 'jose']
const personas = [
    {nombre: 'pepe'},
    {nombre: 'juan'}, 
    {nombre: 'jose'}
]

const personasObj = nombres.map(
    (nombre) => {
        return {nombre: nombre}
    })

console.log(personasObj)
console.log(personasObj[0].nombre)


// Dado este carrito generar otro carrito donde el producto con id 3 tenga su cantidad en 1 menos
const carrito = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 4
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

const carritoMod = carrito.map(
    (producto)=> {
        if (producto.productoId === 3){
            producto.cantidad--;
        }
        return {producto}
    }
)

console.log(carritoMod)


/*
Crear una funcion que se llame quitarProductoDelCarrito que recibira el array de carrito y el id del producto a decrementar
y devolvera un nuevo array con la estructura original del carrito, pero el producto que su id sea igual al id recibido tendra su 
cantidad decrementada en 1



const carrito = [
    {
        productoId: 1,
        cantidad: 2
    },
    {
        productoId: 2,
        cantidad: 40
    },
    {
        productoId: 3,
        cantidad: 90
    }
]

function quitarProductoDelCarrito(carrito, idProducto) {
    return carrito.map(producto => {
        if (producto.productoId === idProducto && producto.cantidad > 0) {
            producto.cantidad --;
        }
        return producto;
    });
}

console.log(quitarProductoDelCarrito(carrito, 2));
*/

