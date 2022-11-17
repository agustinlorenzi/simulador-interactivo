//Clase constructora de los objetos articulos
class Articulo {
    constructor(codigo, descripcion, precio, imagen) {
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.precio = Number(precio);
        this.imagen = imagen;
    }
}
//datos de los objetos articulos
const articulo1 = new Articulo(1, "Crema Hidratante para Manos                             ", 500, "./img/producto1.jpg");
const articulo2 = new Articulo(2, "Oro Liquido sin Formol                                  ", 350, "./img/producto2.jpg");
const articulo3 = new Articulo(3, "Tratamiento a base de aceites 80 ml                     ", 475, "./img/producto3.jpg");
const articulo4 = new Articulo(4, "Kit Antifrizz: 1 Shampoo, 1 Antifrizz y 1 Nutrición     ", 1050, "./img/producto4.jpg");
const articulo5 = new Articulo(5, "Manteca Desmaquillante                                  ", 735, "./img/producto5.jpg");
const articulo6 = new Articulo(6, "Exfoliante de Labios + Bálsamo Hidratante               ", 1528, "./img/producto6.jpg");
const articulo7 = new Articulo(7, "Contorno de Ojos con Cafeína y Q10                      ", 875, "./img/producto7.jpg");
const articulo8 = new Articulo(8, "Mascarilla Capilar                                      ", 983,"./img/producto8.jpg");
const articulo9 = new Articulo(9, "Balsamo de Karité, cacao, almendras, vitamina Hidratante", 759, "./img/producto9.jpg");
const articulo10 = new Articulo(10, "Fragancia Natural                                       ", 253, "./img/producto10.jpg");
const articulo11 = new Articulo(11, "Mascarilla Esfoliante Facial                            ", 899, "./img/producto11.jpg");
const articulo12 = new Articulo(12, "Exfoliante de Labios                                    ", 423, "./img/producto12.jpg");
//array que contiene todo el listado de articulos
const articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12]
articulos.forEach((art) => {
    let content = document.getElementById("vidriera")
    let content1 = document.createElement("div")

    //content.className = "card"    
    content1.innerHTML = `
    <div class="card mt-3 mb-3" style="width: 18rem;">
    <img src="${art.imagen}">  class="card-img-top" alt="articulo(${art.codigo})">
                  <div class="card-body text-dark bg-secondary bg-opacity-25">                    
                      <p class="card-title text-center fs-5 fw-bold">${art.descripcion}</p>                      
                      <p class="card-text">$${art.precio}</p> 
                      <a href="#pedir"><button class="btn btn-primary" onclick="indicarArticulo(${art.codigo})">Habilitar Carga</button></a>
                      <input id="${art.codigo}" type="number" min="0" placeholder="Cantidad" name="cantidad"></input>  
                      </div>   
                      

                    </div>
               `;
    content.append(content1);

    //

})

/*let padre1 = document.getElementById("tituloCarrito")
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
        padre1.appendChild(contenedor1);*/



//subtotal.
let subtotal = 0;
function subTotal(precio, cant) {
    subtotal = 0;
    subtotal = precio * cant;
    //let containerSubtotal = document.getElementById("subtotal")
    //containerSubtotal.innerHTML = `<input type="number" placeholder=  "$ ${subtotal}" name="precio" disabled>`
    //subtotal = precio * cant;
}


//icono de eliminar.
let iconoEliminar = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`;
//calcula el total del carro
let total = 0;
function totalCarrito() {
    verCarrito.innerHTML = ``
    total = 0;
    if (comprados.length !== 0) {
        agregarArticulos()
        let padre2 = document.getElementById("totalCarrito25")
        padre2.innerHTML = `<h2>Total:  $ ${total}</h2>`;
    } else {
        let padre1 = document.getElementById("tituloCarrito")
        padre1.innerHTML = ``
        verCarrito.innerHTML = ``
        let padre2 = document.getElementById("totalCarrito25")
        padre2.innerHTML = ``;
    }

    //opcion.value = `-`
}


//arma el encabezado de la tablita
function encabezadoTablita() {
    if (comprados.length === 1) {
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
        padre1.append(contenedor1);
        verCarrito.innerHTML = ``
        totalCarrito()
    } else {
        verCarrito.innerHTML = ``
        totalCarrito()
    }
}
//agrega los articulos en el carro.
let posicionArticulo = 0;
function agregarArticulos() {
    posicionArticulo = 0
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
                        <td><span onclick="eliminar(${posicionArticulo})">${iconoEliminar}</span></td>                            
                    </tr>                            
                </table>`;
        padre.appendChild(contenedor);
        console.log("posicion " + posicionArticulo)
        posicionArticulo = posicionArticulo + 1;
        console.log("posicion " + posicionArticulo)
    }
    cant = 0;
}


//elimina los articulos comprados, se la llama desde el simbolo de tachito que acompaña a cada articulo en el carro.
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
}
//funcion de compra, forma el array de los objetos articulos comprados
let comprados = [];
function compra(codigo, descripcion, precio, cant, subtotal) {
    const comprado = new Comprado(codigo, descripcion, precio, cant, subtotal);
    comprados.push(comprado);
}



//COMIENZO DEL CIRCUITO EN EL PROGRAMA MEDIANTE EL DESPLEGABLE
/*let elegido = 0;
let opcion = document.getElementById("articulos")
opcion.addEventListener("input", () => {
    elegido = Number(opcion.value)
    indicarArticulo(elegido)
})


//escucha el input donde se coloca la cantidad solicitada de cada articulo.
cant = 0;
let cantidad = document.getElementById("cantidad")
cantidad.addEventListener("input", () => {
    cant = Number(cantidad.value)
    subTotal(artSeleccionado.precio, cant)
})*/



//a esta funcion se la llama ya sea que el usuario comience por el desplegable, o la llame directamente presionando
//los botones de agregar.
let numeroArticulo = 0 //se unifica elegido o el numero que manda el onclick para luego continuar el camino,
//independientemente de la via de comienzo de la accion de compra que el usuario haya usado.
/*function indicarArticulo(numArt) {
    opcion.value = numArt
    numeroArticulo = numArt
    artSeleccionado = articulos.find((el) => el.codigo === numArt);
    let container = document.getElementById("precio")
    container.innerHTML = `<input type="number" placeholder=  "$ ${artSeleccionado.precio}" name="precio" disabled>`
    subTotal(artSeleccionado.precio, cant)*/

//const input = document.querySelector("#id");
//console.log("el input dice: " + input)

/*let content = document.getElementById("vidriera")
let content1 = document.createElement("div")

//content.className = "card"    
content1.innerHTML = `
<div class="card mt-3 mb-3" style="width: 18rem;">
<img src="${art.imagen}">  class="card-img-top" alt="articulo(${art.codigo})">
              <div class="card-body text-dark bg-secondary bg-opacity-25">                    
                  <p class="card-title text-center fs-5 fw-bold">${art.descripcion}</p>                      
                  <p class="card-text">$${art.precio}</p>  
                  <input class="input" id="${art.codigo}" type="number" min="1" placeholder="Cantidad" name="cantidad">               
                  <a href="#pedir"><button class="btn btn-primary" onclick="indicarArticulo(${art.codigo})">Agregar</button></a>
              </div>
          </div> `;
content.append(content1);*/


//cant = 0;
let cantidade = document.getElementById("1")
cantidade.addEventListener("input", () => {
    let cant25 = Number(cantidade.value)
    console.log(cant25)
    console.log("ver numero " + (cant25 + 1))
    //subTotal(artSeleccionado.precio, cant)
})



let cant = 0;
/*function indicarArticulo(numArt) {
    const input = document.querySelector(`#${numArt}`);
    console.log(input.value);
}*/
function indicarArticulo(numArt) {
    //<input id="${art.codigo}" type="number" min="1" placeholder="Cantidad" name="cantidad"></input>
    let stringId = numArt.toString();
    //let containerSubtotal = document.getElementById(stringId)
    //containerSubtotal.innerHTML = `<input id="producto${art.codigo}" type="number" min="1" placeholder="Cantidad" name="cantidad"></input>`
    //console.log("la funcion indicar esta siendo llamada " + numArt)

    let cantidad = document.getElementById(stringId)
    cantidad.addEventListener("input", () => {
        cant = Number(cantidad.value)
        console.log("esto es numart " + (numArt + 1))
        console.log("la cantidad puesta es: " + (cant + 1))
        visualizarCarrito(numArt)
    })
}




//escucha el llamado de agregar al carrito
/*let agregar = document.getElementById("agregarCarrito");
agregar.addEventListener("click", visualizarCarrito)*/


//comienza a conformar el carrito. 
//ve si el usuario puso la cantidad que desea comprar, y si lo olvido se lo recuerda.
//si no tiene ningun articulo, llama a que se haga la estructura inicial de la tabla.
//si tiene articulos y alguno existe, le pisa la cantidad. sino existe solicita que en la funcion total se lo agregue.
//reinicia todos los input para que esten listos para la carga de otro articulo.
function visualizarCarrito(numArt) {
    /*if (cantidad.value !== "" && cant > 0 && opcion.value !== `-`) {
        let existe = comprados.some(comprado => comprado.codigo === numeroArticulo);
function visualizarCarrito(numArt) {*/
    artSeleccionado = articulos.find((el) => el.codigo === numArt);
    subTotal(artSeleccionado.precio, cant)
    if (cant > 0) {
        let existe = comprados.some(comprado => comprado.codigo === numArt);
        if (existe === false) {
            compra(artSeleccionado.codigo, artSeleccionado.descripcion, artSeleccionado.precio, cant, subtotal);
            //e.preventDefault();
            //e.preventDefault();
            let poner = document.getElementById("ponerCantidad")
            poner.innerHTML = `<p> </p>`

            encabezadoTablita()
        } else {
            //e.preventDefault();
            //artBuscado = comprados.find((el) => el.codigo === numeroArticulo);
            //e.preventDefault();
            artBuscado = comprados.find((el) => el.codigo === numArt);
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
        // e.preventDefault();
        //e.preventDefault();
        let poner = document.getElementById("ponerCantidad")
        poner.innerHTML = `<p>Indicar Articulo o Cantidad correctamente.</p>`
    }
    cant = 0;
    //cantidad.value = `0`
    //let containerSubtotal = document.getElementById("subtotal")
    //containerSubtotal.innerHTML = `<input type="number" placeholder=  "Subtotal" name="precio" disabled>`
    //cant = 0;
    // cantidad.value = `0`
    //let containerSubtotal = document.getElementById("subtotal")
    //containerSubtotal.innerHTML = `<input type="number" placeholder=  "Subtotal" name="precio" disabled>`
    subtotal = 0;
}







