
//Datos. Codigo, descripcion y precios de los productos.

//Funciones.
class Articulo {
    constructor(codigo, descripcion, precio) {
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
    mostrarEleccion(cantidad, descripcion, precio) {
        alert("Usted compro " + cantidad + " " + descripcion + " de $" + precio + " c/u. \nEste articulo representa en su cuenta $" + subtotal + ".")

    }
}

//objetos
const articulo1 = new Articulo(1, "Crema Hidratante para Manos", 500);
const articulo2 = new Articulo(2, "Oro Liquido sin Formol", 350);
const articulo3 = new Articulo(3, "Tratamiento a base de aceites 80 ml", 475);
const articulo4 = new Articulo(4, "Kit Antifrizz: 1 Shampoo, 1 Antifrizz y 1 Nutrición", 1050);
const articulo5 = new Articulo(5, "Manteca Desmaquillante", 735);
const articulo6 = new Articulo(6, "Exfoliante de Labios + Bálsamo Hidratante", 1528);
const articulo7 = new Articulo(7, "Contorno de Ojos con Cafeína y Q10", 875);
const articulo8 = new Articulo(8, "Mascarilla Capilar", 983);
const articulo9 = new Articulo(9, "Balsamo de Karité, cacao, almendras, vitamina Hidratante", 759);
const articulo10 = new Articulo(10, "Fragancia Natural", 253);
const articulo11 = new Articulo(11, "Mascarilla Esfoliante Facial", 899);
const articulo12 = new Articulo(12, "Exfoliante de Labios", 423);

const articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12]


//Suma el monto total de la compra.
let total = 0;
let subtotal = 0;
let listadoCarrito = []
let comprado = ""
function totalCarrito(codigo, descripcion, precio, cantidad) {
    subtotal = precio * cantidad;
    total = total + subtotal;
    comprado = "codigo: " + codigo + ". " + descripcion + " $" + precio + ". Cantidad:" + cantidad;
    listadoCarrito.push(comprado)
}

//Calcula el monto a pagar segun la forma de pago, teniendo en cuenta los intereses.
let interes = 0;
let cuotas = 0;
function formaPago() {
    if (total > 0) {
        alert("Su compra fue de $" + total);
        let pagos = prompt
            ("¿En cuantos pagos desea abonar esta compra?.\n Siendo el interes: \n-En un pago sin interes.\n-En 3 pagos 10%.\n-En 6 pagos 15%.\n-En 12 pagos 20%.");
        switch (pagos) {
            case "1":
                cuotas = 1;
                interes = 0;
                alert("Usted va a pagar $" + total);
                solicitarDatos();
                break;
            case "3":
                cuotas = 3;
                interes = total * 0.10;
                alert("Usted va a pagar $" + (total + interes));
                solicitarDatos();
                break;
            case "6":
                cuotas = 6;
                interes = total * 0.15;
                alert("Usted va a pagar $" + (total + interes));
                solicitarDatos();
                break;
            case "12":
                cuotas = 12;
                interes = total * 0.20;
                alert("Usted va a pagar $" + (total + interes));
                solicitarDatos();
                break;
            default:
                alert("No es posible esa forma de pago, por favor indique una correcta.")
                formaPago();
                break;
        }
    } else {
        alert("Lo invitamos a ver nuestro catalogo, quiza encuentre algo de su interes.");
    }
}

//Solicita los datos para enviar su compra al consumidor.
function solicitarDatos() {
    alert("Complete los siguientes datos para que le enviemos su pedido.");
    let nombre = prompt("Coloque su nombre completo: ");
    let telefono = Number(prompt("Coloque su numero telefonico: "));
    let direccion = prompt("Coloque su direccion: ");
    /*aca se llama a la funcion mostrarCompra, que muestra un resumen de la misma, pasando las
    variables locales para que la otra funcion pueda usarlas*/
    mostrarCompra(nombre, telefono, direccion);
}

//Muestra al usuario un resumen de su compra.
const guardado1 = [];
let guardar1 = "";
function mostrarCompra(nombre, telefono, direccion) {
    if (nombre != "" && telefono != "" && direccion != "") {
        for (const articulo of listadoCarrito) {
            guardar1 = articulo
            guardado1.push(guardar1)
        }
        alert("Los articulos que compraste son: \n" + guardado1.join("\n") + "\n" + nombre + ".\nTelefono de Contacto " + telefono + ".\nCompraste productos capilares por un monto de $" + (total) + "\nLo pagaste en " + cuotas +
            " pago/s con un interes de $" + interes + "\nY el monto final es de $" + (total + interes) + "\nEnviaremos el pedido a "
            + direccion);

        /*alert(nombre + ".\nTelefono de Contacto " + telefono + ".\nCompraste productos capilares por un monto de $" + (total) + "\nLo pagaste en " + cuotas +
            " pago/s con un interes de $" + interes + "\nY el monto final es de $" + (total + interes) + "\nEnviaremos el pedido a "
            + direccion);*/
    } else {
        alert("Complete correctamente todos los datos para que podamos enviarle el pedido.")
        solicitarDatos()
    }
}



//Bloque principal. Permite al usuario seleccionar el articulo de su interes.

let pregunta = prompt("Desea cargar algun articulo al carrito? si/no")

while (pregunta == "si") {

    let guardado = []
    let guardar = ""
    for (const articulo of articulos) {
        guardar = articulo.codigo + " " + articulo.descripcion + " $" + articulo.precio
        guardado.push(guardar)
    }
    alert("Lista de Articulos y codigos(utilice el codigo del principio para completar el carrito): \n" + guardado.join("\n"))

    /*alert("Lista de Articulos: " + "\n" + (articulo1.codigo + " - " + articulo1.descripcion + " $" + articulo1.precio)+ "\n" + articulo2 + "\n" + articulo3 + "\n" + articulo4 +
        "\n" + articulo5 + "\n" + articulo6 + "\n" + articulo7 + "\n" + articulo8 + "\n" + articulo9 + "\n" + articulo10 +
        "\n" + articulo11 + "\n" + articulo12 + "\n" +
        "Complete en la siguiente pantalla el codigo del articulo de su eleccion.")*/

    let opcion = prompt("¿Que articulo necesita?, coloque su codigo");
    let cantidad = Number(prompt("¿Que cantidad deseas de este producto?"))
    //let descripcion = "";
    //let precio = "";
    switch (opcion) {
        case "1":
            totalCarrito(articulo1.codigo, articulo1.descripcion, articulo1.precio, cantidad);
            articulo1.mostrarEleccion(cantidad, articulo1.descripcion, articulo1.precio);
            break
        case "2":
            totalCarrito(articulo2.codigo, articulo2.descripcion, articulo2.precio, cantidad);
            articulo2.mostrarEleccion(cantidad, articulo2.descripcion, articulo2.precio);
            break
        case "3":
            totalCarrito(475, cantidad);
            break
        case "4":
            totalCarrito(1050, cantidad);
            break
        case "5":
            totalCarrito(735, cantidad);
            break
        case "6":
            totalCarrito(1528, cantidad);
            break
        case "7":
            totalCarrito(875, cantidad);
            break
        case "8":
            totalCarrito(983, cantidad);
            break
        case "9":
            totalCarrito(759, cantidad);
            break
        case "10":
            totalCarrito(253, cantidad);
            break
        case "11":
            totalCarrito(899, cantidad);
            break
        case "12":
            totalCarrito(423, cantidad);
            break
        default:
            alert("El codigo del articulo no es correcto.")
            break
    }
    pregunta = prompt("¿Desea cargar otro articulo? si/no")
}

//Llamado a la funcion forma de pago.
formaPago();






