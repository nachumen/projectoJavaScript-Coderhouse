let opcion = ingreseNumero("Ingrese\n1 para comprar\n2 para finalizar compra\n0 para salir")
let total = 0
while (opcion !== 0) {
    if (opcion === 1) {
        total = total + compra()
    } else if (opcion === 2) {
        alert("Total: " + total + ". Gracias vuelva prontos")
        total = 0
    } else {
        alert("No es una opción, escoja una de las opciones")
    }
    opcion = Number(prompt("Ingrese\n1 para comprar\n2 para finalizar compra\n0 para salir"))
}

function compra() {
    let opcionCompra = ingreseNumero("Ingrese el producto que desea comprar:\n1 Elden Ring USD 48\n2 Stardew Valley USD 5\n3 House Flipper 2 USD 16")
    let subtotal = 0
    switch (opcionCompra){
        case 1:
            subtotal= subtotal + 48
        break;
        case 2:
            subtotal= subtotal + 5
        break;
        case 3:
            subtotal= subtotal + 16
        break;
        default:
            break;
    }
    return subtotal
}
function ingreseNumero(texto) {
    return Number(prompt(texto))
}