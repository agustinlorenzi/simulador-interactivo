
///////////////////////////////////////Datos. Codigo, descripcion y precios de los productos.

//Clase constructora de los objetos articulos
class Articulo {
    constructor(codigo, descripcion, precio) {
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.precio = Number(precio);
    }
}

//datos de los objetos articulos
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

//array que contiene todo el listado de articulos
const articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12]





///////////////funcion eleccion, donde el usuario puede elegir si anexa articulos, cambiar cantidades, eliminar items o 
//confirmar la compra.
function eleccion() {
    let elegir = prompt("Elija como proceder con la compra:\n1-Agregar articulos.\n2-Modificar cantidad.\n3-Eliminar Articulo.\n4-Confirmar carro.")
    if (elegir !== "") {
        switch (elegir) {
            case "1":
                pregunta = "si";
                listaPrecio(pregunta);
                break;
            case "2":
                modificarCantidad();
                break;
            case "3":
                eliminar();
                break;
            case "4":
                if (comprados.length !== 0) {
                    formaPago();
                } else {
                    alert("El carrito esta vacio.")
                    principio()
                }
            default:
                break;
        }
    } else {
        alert("Debe elegir una opcion.")
        eleccion()
    }
}




/////////////////////////////////////////////////////Funciones Generales.
//Mostrar carro antes del pago.
let guardar1 = "";
function muestraIntermediaCarro() {
    let guardado1 = [];
    for (const articulo of comprados) {
        guardar1 = "Codigo: " + articulo.codigo + ". Descripcion: " + articulo.descripcion + ". $" + articulo.precio + ". Cant: " + articulo.cant + ". Subtotal: " + articulo.subtotal;
        guardado1.push(guardar1)
    }
    totalCarrito();
    alert("Los articulos que compraste son: \n" + guardado1.join("\n") + "\nY el total represento: $" + total)
    eleccion();
}

//subtotal.
let subtotal = 0;
function subTotal(precio, cant) {
    subtotal = 0;
    subtotal = precio * cant;
}

//Suma el monto total de la compra.
let total = 0;
function totalCarrito() {
    total = 0;
    for (const articulo of comprados) {
        total = total + articulo.precio * articulo.cant;
    }
}

//Calcula el monto a pagar segun la forma de pago, teniendo en cuenta los intereses.
let interes = 0;
let cuotas = 0;
function formaPago() {
    let pagos = prompt
        ("¿En cuantos pagos desea abonar esta compra?.\n Siendo el interes: \n-En un pago sin interes.\n-En 3 pagos 10%.\n-En 6 pagos 15%.\n-En 12 pagos 20%.");
    switch (pagos) {
        case "1":
            cuotas = 1;
            interes = 0;
            alert("Usted va a pagar $" + total);
            break;
        case "3":
            cuotas = 3;
            interes = total * 0.10;
            alert("Usted va a pagar $" + (total + interes));
            break;
        case "6":
            cuotas = 6;
            interes = total * 0.15;
            alert("Usted va a pagar $" + (total + interes));
            break;
        case "12":
            cuotas = 12;
            interes = total * 0.20;
            alert("Usted va a pagar $" + (total + interes));
            break;
        default:
            alert("No es posible esa forma de pago, por favor indique una correcta.")
            formaPago();
            break;
    }
    solicitarDatos();
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
const guardado2 = []
let guard = "";
function mostrarCompra(nombre, telefono, direccion) {
    if (nombre !== "" && telefono !== "" && direccion !== "") {
        for (const articulo of comprados) {
            guard = "Codigo: " + articulo.codigo + ". Descripcion: " + articulo.descripcion + ". $" + articulo.precio + ". Cant: " + articulo.cant + ". Subtotal: " + articulo.subtotal;
            guardado2.push(guard);
        }
        alert("Los articulos que compraste son: \n" + guardado2.join("\n") + "\n" + "Cliente: " + nombre + ".\nTelefono de Contacto " + telefono + ".\nCompraste productos capilares por un monto de $" + total + "\nLo pagaste en " + cuotas +
            " pago/s con un interes de $" + interes + "\nY el monto final es de $" + (total + interes) + "\nEnviaremos el pedido a "
            + direccion);
    } else {
        alert("Complete correctamente todos los datos para que podamos enviarle el pedido.")
        solicitarDatos()
    }
}




////////////////////////////Funciones de Agregado, modificacion, eliminacion o confirmacion de articulos.

// constructor articulos comprados
class Comprado {
    constructor(codigo, descripcion, precio, cant, subtotal) {
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.cant = Number(cant);
        this.subtotal = Number(subtotal)
    }
    mostrarEleccion(cantidad, descripcion, precio, subtotal) {
        alert("Usted compro " + cantidad + " " + descripcion + " de $" + precio + " c/u. \nEste articulo representa en su cuenta $" + subtotal + ".")
    }
}

//funcion de compra, forma el array de los objetos articulos comprados
const comprados = [];
function compra(codigo, descripcion, precio, cant, subtotal) {
    const comprado = new Comprado(codigo, descripcion, precio, cant, subtotal);
    comprados.push(comprado);
    comprado.mostrarEleccion(comprado.cant, comprado.descripcion, comprado.precio, comprado.subtotal);
}

//Funcion para comprar mostrando la lista de precios general de articulos
function listaPrecio(pregunta) {
    let opcion = 0;
    let cantidad = 0;
    let cant = 0;
    while (pregunta === "si") {
        let guardado = []
        let guardar = ""
        for (const articulo of articulos) {
            guardar = articulo.codigo + " " + articulo.descripcion + " $" + articulo.precio
            guardado.push(guardar)
        }
        alert("Lista de Articulos y codigos(utilice el codigo del principio para completar el carrito):\n" + guardado.join("\n"))
        opcion = Number(prompt("¿Que articulo necesita?, coloque su codigo"));
        cantidad = Number(prompt("¿Que cantidad deseas de este producto?"));
        if (opcion !== "" && opcion !== 0 && cantidad !== "" && cantidad !== 0) {
            cant = parseInt(cantidad);
            let artSeleccionado = articulos.find((el) => el.codigo === opcion);
            subTotal(artSeleccionado.precio, cant)
            compra(artSeleccionado.codigo, artSeleccionado.descripcion, artSeleccionado.precio, cant, subtotal);
            pregunta = prompt("¿Desea cargar otro articulo? si/no")
        } else {
            alert("Cargue algun producto o cantidad.")
        }
    }
    muestraIntermediaCarro();
}

//Modificar cantidad de los articulos
function modificarCantidad() {
    let modificar = Number(prompt("¿Que articulo desea modificar su cantidad?: "));
    const existe = comprados.some(comprado => comprado.codigo === modificar);
    if (existe !== false) {
        let nuevaCantidad = Number(prompt("¿Que cantidad desea?: "))
        nuevaCantidad = parseInt(nuevaCantidad)
        if (nuevaCantidad !== 0) {
            const artModificar = comprados.find((el) => el.codigo === modificar);
            artModificar.cant = nuevaCantidad;
            subTotal(artModificar.precio, nuevaCantidad)
            artModificar.subtotal = subtotal
            muestraIntermediaCarro();
        } else {
            alert("No puso cantidad correcta, por favor indiquelo de nuevo.")
            modificarCantidad()
        }
    } else {
        alert("Ese articulo no se encuentra en su carro.");
        eleccion();
    }
}

//Funcion para eliminar los articulos del carro
let borrar = 0;
function eliminar() {
    borrar = 0;
    let elim = Number(prompt("¿Que articulo desea eliminar?: "));
    const existe = comprados.some(comprado => comprado.codigo === elim);
    if (existe !== false) {
        for (const objeto of comprados) {
            if (objeto.codigo === elim) {
                borrar = comprados.indexOf(objeto)
            }
        }
    } else {
        alert("Ese articulo no se encuentra en su carro.");

        eleccion();
    }
    comprados.splice(borrar, 1)
    console.log(comprados)
    muestraIntermediaCarro()
}






////////////////////////////////////////////Funcion de arranque.    
function principio() {
    let pregunta = (prompt("Desea cargar algun articulo al carrito? si/no")).toLowerCase();
    if (pregunta === "si") {
        listaPrecio(pregunta);
    } else {
        alert("Lo invitamos a ver nuestro catalogo, quiza encuentre algo de su interes.");
    }
}





//////////////////////////////////////////////////Inicio del programa.
principio();









