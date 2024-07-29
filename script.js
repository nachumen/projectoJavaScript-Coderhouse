let productos = [
    { id: 1, nombre: "Elden Ring", categoria: "souls-like", precio: 48 },
    { id: 36, nombre: "Dark Souls 3", categoria: "souls-like", precio: 48 },
    { id: 17, nombre: "Stardew Valley", categoria: "farming sim", precio: 5 },
    { id: 13, nombre: "Roots of Pacha", categoria: "farming sim", precio: 13 },
    { id: 45, nombre: "House Flipper 2", categoria: "simulation", precio: 16 },
    { id: 42, nombre: "Car Mechanic Simulator 2018", categoria: "simulation", precio: 11 },
    { id: 2, nombre: "Forza Horizon 4", categoria: "racing", precio: 20 },
    { id: 33, nombre: "Red Dead Redemption 2", categoria: "open world", precio: 60 },
    { id: 91, nombre: "Borderlands 3", categoria: "open world", precio: 60 },
    { id: 82, nombre: "Once Human", categoria: "survival", precio: 0 },
    { id: 80, nombre: "Enshrouded", categoria: "survival", precio: 15 },
    { id: 8, nombre: "Helldivers 2", categoria: "online co-op", precio: 40 },
    { id: 9, nombre: "Dirt 5", categoria: "racing", precio: 60 },
]

let opcion = ingreseNumero("Ingrese\n1 para agregar a carrito\n2 para filtrar por categoria\n3 para finalizar compra\n0 para salir")
let carrito = []

while (opcion !== 0) {
    if (opcion === 1) {

        carrito = compra()
    } else if (opcion === 2){
       
        carrito = compraCategoria()

    } else if (opcion === 3) {
        if (carrito.length > 0){
            let total = carrito.reduce((acum, prod)=> acum + prod.subtotal, 0)
            alert("Total: " + total + ". Gracias vuelva prontos")
            break
        } else{
            alert("Oh no, el carrito esta vacío")
        }
        

    } else {
        alert("No es una opción, escoja una de las opciones")
    }
    opcion = ingreseNumero("Ingrese\n1 para comprar\n2 para filtrar\n3 para finalizar compra\n0 para salir")
}

function lista(listaProductos) {
    return listaProductos.map(producto => "ID: " + producto.id + " " + producto.nombre + " USD " + producto.precio).join("\n")
}

function compraCategoria() {
    let nombreCategoria = ingresarTexto()
    let categoriaBuscada = productos.filter(producto => producto.categoria == nombreCategoria)
    let idProducto = ingreseNumero("Seleccionar producto por Id:\n" + lista(categoriaBuscada))
    if (productos.some(producto => producto.id === idProducto)) {
        let buscarProducto = productos.find(producto => producto.id === idProducto)
        let yaEnCarrito = carrito.findIndex(producto => producto.id === buscarProducto.id)
        if (yaEnCarrito === -1) {
            carrito.push({
                id: buscarProducto.id,
                nombre: buscarProducto.nombre,
                precioUnitario: buscarProducto.precio,
                unidades: 1,
                subtotal: buscarProducto.precio
            })
        } else {
            carrito[yaEnCarrito].unidades++
            carrito[yaEnCarrito].subtotal = carrito[yaEnCarrito].unidades * carrito[yaEnCarrito].precioUnitario
        }

    } else {
        alert("Ese ID no lo encuentro, proba de nuevo")
    }
    return carrito
}


function compra() {
    let idProducto = ingreseNumero("Seleccionar producto por Id:\n" + lista(productos))
    if (productos.some(producto => producto.id === idProducto)) {
        let buscarProducto = productos.find(producto => producto.id === idProducto)
        let yaEnCarrito = carrito.findIndex(producto => producto.id === buscarProducto.id)
        if (yaEnCarrito === -1) {
            carrito.push({
                id: buscarProducto.id,
                nombre: buscarProducto.nombre,
                precioUnitario: buscarProducto.precio,
                unidades: 1,
                subtotal: buscarProducto.precio
            })
        } else {
            carrito[yaEnCarrito].unidades++
            carrito[yaEnCarrito].subtotal = carrito[yaEnCarrito].unidades * carrito[yaEnCarrito].precioUnitario
        }

    } else {
        alert("Ese ID no lo encuentro, proba de nuevo")
    }
    return carrito
}


function ingreseNumero(texto) {
    return Number(prompt(texto))
}

function ingresarTexto(){
    let texto = prompt("Ingresar categoria:\n")
    return texto.toLowerCase()
}