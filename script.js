
//Datos. Codigo, descripcion y precios de los productos.

let articulo1 = "1 - Crema Hidratante para Manos $500";
let articulo2 = "2 - Oro Liquido sin Formol $350";
let articulo3 = "3 - Tratamiento a Base de Aceites 80ml $475";
let articulo4 = "4 - Kit Antifrizz: 1 Shampoo, 1 Antifrizz y 1 Nutrición $1050";
let articulo5 = "5 - Manteca Desmaquillante $735";
let articulo6 = "6 - Exfoliante de Labios + Bálsamo Hidratante $1528";
let articulo7 = "7 - Contorno de Ojos con Cafeína y Q10 $875";
let articulo8 = "8 - Mascarilla Capilar $983";
let articulo9 = "9 - Bálsamo de karité , cacao , almendras, vitamina Hidratante $759";
let articulo10 = "10 - Fragancia Natural $253";
let articulo11 = "11 - Mascarilla Esfoliante Facial $899";
let articulo12 = "12 - Exfoliante de Labios $423";


//Funciones.

//Suma el monto total de la compra.
let total = 0;
function totalCarrito(monto, cantidad) {
    total = total + (monto * cantidad);
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
    mostrarCompra(nombre,telefono,direccion);
}

//Muestra al usuario un resumen de su compra.
function mostrarCompra(nombre, telefono, direccion) {
    alert(nombre + ".\nTelefono de Contacto " + telefono + ".\nCompraste productos capilares por un monto de $" + (total) + "\nLo pagaste en " + cuotas +
        " pago/s con un interes de $" + interes + "\nY el monto final es de $" + (total + interes) + "\nEnviaremos el pedido a "
        + direccion);
}



//Bloque principal. Permite al usuario seleccionar el articulo de su interes.

let pregunta = prompt("Desea cargar algun articulo al carrito? si/no")

while (pregunta == "si") {

    alert("Lista de Articulos: " + "\n" + articulo1 + "\n" + articulo2 + "\n" + articulo3 + "\n" + articulo4 +
        "\n" + articulo5 + "\n" + articulo6 + "\n" + articulo7 + "\n" + articulo8 + "\n" + articulo9 + "\n" + articulo10 +
        "\n" + articulo11 + "\n" + articulo12 + "\n" +
        "Complete en la siguiente pantalla el codigo del articulo de su eleccion.")

    let opcion = prompt("¿Que articulo necesita?, coloque su codigo");
    let cantidad = Number(prompt("¿Que cantidad deseas de este producto?"))

    switch (opcion) {
        case "1":
            totalCarrito(500, cantidad);
            break
        case "2":
            totalCarrito(350, cantidad);
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






