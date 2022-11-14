

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

//subtotal.
let subtotal = 0;
function subTotal(precio, cant) {
    subtotal = 0;
    subtotal = precio * cant;
    let containerSubtotal = document.getElementById("subtotal")
    containerSubtotal.innerHTML = `<input type="number" placeholder=  "$ ${subtotal}" name="precio" disabled>`
}


let iconoEliminar = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`;

let total = 0;
let posicionArticulo = 0;
function totalCarrito() {
    //let padre1 = document.getElementById("tituloCarrito")
    //padre1.innerHTML = ``
    verCarrito.innerHTML = ``
    total = 0;
    posicionArticulo = 0
    if (comprados.length !== 0) {
        for (const articulo of comprados) {

            total = total + articulo.precio * articulo.cant;


            let padre = document.getElementById("verCarrito")
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `
        <table class="table1" border="1" cellpading="20" cellspacing="0">                       
                        <tr>
                            <td>${articulo.codigo}</td>                            
                            <td>${articulo.descripcion}</td>
                            <td>${articulo.cant}</td>
                            <td> $ ${articulo.precio}</td>
                            <td> $ ${articulo.subtotal}</td>
                            <td><button onclick="eliminar(${posicionArticulo})">${iconoEliminar}</button></td>
                            
                        </tr>                            
                    </table>`;
            padre.appendChild(contenedor);
            posicionArticulo = posicionArticulo + 1;
        }
    } else {

        let padre1 = document.getElementById("tituloCarrito")
        padre1.innerHTML = ``
        verCarrito.innerHTML = ``

    }
    opcion.value = `-`
    let padre2 = document.getElementById("totalCarrito25")
    padre2.innerHTML = `<h2>Total:  $ ${total}</h2>`;
}


function eliminar(posicion) {
    comprados.splice(posicion, 1)
    console.log(comprados)
    totalCarrito()
}



// constructor articulos comprados
class Comprado {
    constructor(codigo, descripcion, precio, cant, subtotal) {
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.cant = Number(cant);
        this.subtotal = Number(subtotal)
    }
    /*mostrarEleccion(cantidad, descripcion, precio, subtotal) {
        alert("Usted compro " + cantidad + " " + descripcion + " de $" + precio + " c/u. \nEste articulo representa en su cuenta $" + subtotal + ".")
    }*/
}

//funcion de compra, forma el array de los objetos articulos comprados
let comprados = [];
function compra(codigo, descripcion, precio, cant, subtotal) {
    const comprado = new Comprado(codigo, descripcion, precio, cant, subtotal);
    comprados.push(comprado);
    //comprado.mostrarEleccion(comprado.cant, comprado.descripcion, comprado.precio, comprado.subtotal);
}



//contenedor.innerHTML = ``

let elegido = 0;
let artPrecio = 0;
let opcion = document.getElementById("articulos")
opcion.addEventListener("input", () => {
    console.log(opcion.value)
    elegido = Number(opcion.value)
    console.log(elegido + 1)
    indicarArticulo(elegido)

})

/*let indicar = document.getElementById();
indicar.addEventListener("click", indicarArticulo)
console.log(indicar)*/

//let numArt = 0;

function indicarArticulo(numArt) {
    console.log(numArt)
    artSeleccionado = articulos.find((el) => el.codigo === numArt);
    subTotal(artSeleccionado.precio, cant)
    console.log(artSeleccionado)
    opcion.value = numArt
    //artPrecio = artSeleccionado.precio;
    let precio = artSeleccionado.precio
    ponerPrecio(precio)
}


function ponerPrecio(precio) {
    let container = document.getElementById("precio")
    container.innerHTML = `<input type="number" placeholder=  "$ ${precio}" name="precio" disabled>`
}

cant = 0;
let cantidad = document.getElementById("cantidad")
cantidad.addEventListener("input", () => {
    //poner.remove()
    console.log(Number(cantidad.value))
    cant = Number(cantidad.value)
    subTotal(artSeleccionado.precio, cant)

}
    //
    //contenedorPoner.innerHTML = 
    //poner.innerHTML = "Coloque una cantidad"
    //let padre2 = document.getElementById("totalCarrito25")
    //padre2.innerHTML = `<h2>Total:  $ ${total}</h2>`;

)




let agregar = document.getElementById("agregarCarrito");
agregar.addEventListener("click", visualizarCarrito)


function visualizarCarrito(e) {
    //
    //e.preventDefault();

    console.log(comprados.length)
    if (cantidad.value !== "" && cant !== 0) {
        let existe = comprados.some(comprado => comprado.codigo === elegido);
        console.log(existe)
        if (existe === false) {
            compra(artSeleccionado.codigo, artSeleccionado.descripcion, artSeleccionado.precio, cant, subtotal);
            e.preventDefault();
            let poner = document.getElementById("ponerCantidad")
            //let contenedorPoner = document.createElement("div")
            poner.innerHTML = `<p> </p>`
            if (comprados.length === 1) {
                //poner.innerHTML = ``
                let padre1 = document.getElementById("tituloCarrito")
                let contenedor1 = document.createElement("div")
                contenedor1.innerHTML = `<h2>Carrito de Compras.</h2>
        <table class="table" border="1" cellpading="20" cellspacing="0">
                        <tr>
                            <th>CODIGO</th>
                            <th>DESCRIPCION</th>
                            <th>CANTIDAD</th>
                            <th>PRECIO</th>
                            <th>SUBTOTAL</th>
                            <th></th>
                        </tr>                                                   
                    </table>`;
                padre1.appendChild(contenedor1);
                /*let padre = document.getElementById("verCarrito")
                let contenedor = document.createElement("div");
                contenedor.innerHTML = `
        <table class="table1" border="1" cellpading="20" cellspacing="0">                       
                        <tr>
                            <td>${artSeleccionado.codigo}</td>
                            <td>${artSeleccionado.descripcion}</td>
                            <td>${cant}</td>
                            <td> $ ${artSeleccionado.precio}</td>
                            <td> $ ${subtotal}</td>
                        </tr>                            
                    </table>`;
                padre.appendChild(contenedor);*/
                verCarrito.innerHTML = ``
                totalCarrito()
                console.log(total)

                //let padre2 = document.getElementById("totalCarrito25")
                //padre2.innerHTML = `<h2>Total:  $ ${total}</h2>`;
                //opcion.value = `-`

            } else {
                /*let padre = document.getElementById("verCarrito")
                let contenedor = document.createElement("div");
                contenedor.innerHTML = `
        <table class="table1" border="1" cellpading="20" cellspacing="0">                       
                        <tr>
                            <td>${artSeleccionado.codigo}</td>
                            <td>${artSeleccionado.descripcion}</td>
                            <td>${cant}</td>
                            <td> $ ${artSeleccionado.precio}</td>
                            <td> $ ${subtotal}</td>
                        </tr>                            
                    </table>`;
                padre.appendChild(contenedor);*/
                verCarrito.innerHTML = ``
                totalCarrito()
                //let padre2 = document.getElementById("totalCarrito25")
                //padre2.innerHTML = `<h2>Total:  $ ${total}</h2>`;
                //opcion.value = `-`
            }
        } else {
            e.preventDefault();
            artBuscado = comprados.find((el) => el.codigo === elegido);
            //console.log(artBuscado)
            // artBuscado.cant = cant
            //console.log(comprados)
            //subTotal(artBuscado.precio, cant)
            for (const objeto of comprados) {
                if (objeto.codigo === artBuscado.codigo) {
                    borrar = comprados.indexOf(objeto)
                }
            }
            comprados.splice(borrar, 1)
            compra(artSeleccionado.codigo, artSeleccionado.descripcion, artSeleccionado.precio, cant, subtotal);
            verCarrito.innerHTML = ``
            totalCarrito()

        }
    } else {
        e.preventDefault();
        let poner = document.getElementById("ponerCantidad")
        //let contenedorPoner = document.createElement("div")
        poner.innerHTML = `<p>Colocar Cantidad</p>`
        //poner.innerHTML = contenedorPoner;

    }


    cant = 0;
    cantidad.value = `0`

    //cantidad.value = `<input type="number" placeholder=  "Cantidad" name="precio" disabled>`
    let containerSubtotal = document.getElementById("subtotal")
    containerSubtotal.innerHTML = `<input type="number" placeholder=  "Subtotal" name="precio" disabled>`
    subtotal = 0;
}



//Si, si containerSubtotal es un input, en vez de hacer .innerHTML o .innerText haces .value = 300; y listo




