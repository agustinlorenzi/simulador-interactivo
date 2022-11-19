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
const articulo8 = new Articulo(8, "Mascarilla Capilar                                      ", 983, "./img/producto8.jpg");
const articulo9 = new Articulo(9, "Balsamo de Karité, cacao, almendras, vitamina Hidratante", 759, "./img/producto9.jpg");
const articulo10 = new Articulo(10, "Fragancia Natural                                       ", 253, "./img/producto10.jpg");
const articulo11 = new Articulo(11, "Mascarilla Esfoliante Facial                            ", 899, "./img/producto11.jpg");
const articulo12 = new Articulo(12, "Exfoliante de Labios                                    ", 423, "./img/producto12.jpg");


//array que contiene todo el listado de articulos
const articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12]


articulos.forEach((art) => {
    let content = document.getElementById("vidriera")
    let content1 = document.createElement("div")
    content1.innerHTML = `
    <div class="card mt-3 mb-3" style="width: 18rem;">
    <img src="${art.imagen}">  class="card-img-top" alt="articulo(${art.codigo})">
                <div class="card-body text-dark bg-secondary bg-opacity-25">                    
                      <p class="card-title text-center fs-5 fw-bold">${art.descripcion}</p>                      
                      <p class="card-text">$${art.precio}</p>
                    <div class="botonesDisplay">
                        <button class="btn btn-primary" onclick="Sacar(${art.codigo})">-</button>
                        <br>
                        <div id="${art.codigo}">                      
                            <input class="display" type="text" min="0" placeholder="Cantidad" name="cantidad" disabled></input>
                        </div>
                        <br>                      
                        <button class="btn btn-primary" onclick="Agregar(${art.codigo})">+</button>
                    </div>
                      <br>
                      <a href="#finalPagina"><button class="btn btn-primary" onclick="visualizarCarrito(${art.codigo})">Agregar Carrito</button></a>                        
                </div>                         

                    </div>
               `;
    content.append(content1);
})


//subtotal.
let subtotal = 0;
function subTotal(precio, cant) {
    subtotal = 0;
    subtotal = precio * cant;
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
        let padre3 = document.getElementById("confirmarCompra")
        padre3.innerHTML = `<button class="btn btn-primary" onclick="confirmarCarrito()">Confirmar Carro</button>`;
    } else {
        let padre1 = document.getElementById("verCarrito")
        padre1.innerHTML = ``
        verCarrito.innerHTML = ``
        let padre2 = document.getElementById("totalCarrito25")
        padre2.innerHTML = ``;
    }
}


//arma el encabezado de la tablita
let tituloCarro = 0;
function encabezadoTablita() {
    verCarrito.innerHTML = ``
    if (tituloCarro === 0 && comprados.length > 0) {
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
        tituloCarro = 1;
    } else if (comprados.length > 0) {
        //let padre1 = document.getElementById("tituloCarrito")
        //padre1.innerHTML = ``
        verCarrito.innerHTML = ``
        totalCarrito()
        //let padre3 = document.getElementById("confirmarCompra")
        //confirmarCompra.innerHTML = ``
    } else {
        let padre1 = document.getElementById("tituloCarrito")
        padre1.innerHTML = ``
        verCarrito.innerHTML = ``
        let padre3 = document.getElementById("confirmarCompra")
        padre3.innerHTML = ``;
        agregarArticulos()

    }
}



//agrega los articulos en el carro.
let posicionArticulo = 0;
function agregarArticulos() {
    posicionArticulo = 0
    localStorage.clear()
    const guardarLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };
    for (const articulo of comprados) {
        total = total + articulo.precio * articulo.cant;
        let padre = document.getElementById("verCarrito")
        let contenedorAgregar = document.createElement("div");
        contenedorAgregar.innerHTML = `
    <table class="table1" border="1" cellpading="20" cellspacing="0">                       
                    <tr>
                        <td>${articulo.codigo}</td>                            
                        <td>${articulo.descripcion}</td>
                        <td>${articulo.cant}</td>
                        <td> $ ${articulo.precio}</td>
                        <td> $ ${articulo.subtotal}</td>
                        <td><span onclick="eliminar(${posicionArticulo})">${iconoEliminar}</span></td>                            
                    </tr>                            
                </table>      
                `;
        padre.append(contenedorAgregar);
        posicionArticulo = posicionArticulo + 1;
        //guardarLocalStorage(articulo.codigo, JSON.stringify(comprados));
        guardarLocalStorage("productosComprados", JSON.stringify(comprados));
        //console.log("este es " + guardarLocalStorage)
    }
    cant = 0;
}




//Almacenar producto por producto
//for (const producto of productos) {
//guardarLocal(producto.id, JSON.stringify(producto));
//}

//elimina los articulos comprados, se la llama desde el simbolo de tachito que acompaña a cada articulo en el carro.
function eliminar(posicion) {
    comprados.splice(posicion, 1)
    console.log(comprados)
    totalCarrito()
    encabezadoTablita()


}

function confirmarCarrito() {
    comprados.length = 0
    localStorage.clear()
    let padre = document.getElementById("verCarrito")
    padre.innerHTML = ``
    let padre1 = document.getElementById("tituloCarrito")
    padre1.innerHTML = ``
    verCarrito.innerHTML = `Se borro el Local Storage`
    let padre2 = document.getElementById("totalCarrito25")
    padre2.innerHTML = ``;
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

//const guardados = JSON.parse(localStorage.getItem("productosComprados"));
//comprados = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
/*for (let i = 0; i < localStorage.length; i++){
    let articuloGuardado = localStorage.getItem(i);
    comprados.push(new Comprado(articuloGuardado));
}
totalCarrito()
//agregarArticulos()
console.log(comprados)
//Ahora tenemos objetos productos y podemos usar sus métodos*/

//console.log("esto es comprados " + (comprados))
class Comprado1 {
    constructor(obj) {
        this.codigo = parseFloat(obj.codigo);
        this.descripcion = obj.descripcion;
        this.precio = parseFloat(obj.precio);
        this.cant = parseFloat(obj.cant);
        this.subtotal = parseFloat(obj.subtotal);
    }
}

//for (let i = 0; i > 0; i++) {
let renovar = 0
function renovarCarrito() {
    if (renovar === 0) {
        console.log("funcion llamada")
        guardados = JSON.parse(localStorage.getItem("productosComprados"));
        console.log("esto es almacenados " + guardados)
        //const comprados1 = [];
        //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
        for (const objeto of guardados) {
            comprados.push(new Comprado1(objeto));
        }
        console.log(comprados)
        encabezadoTablita()
        renovar = 1
    }
    //agregarArticulos()

}

let cant = 0;
function Agregar(numArt) {
    cant = cant + 1;
    let stringId = numArt.toString();
    let container = document.getElementById(stringId)
    container.innerHTML = `<input class="display" type="text" placeholder=  "${cant}" name="Cantidad" disabled>`

}

function Sacar(numArt) {
    if (cant > 0) {
        cant = cant - 1;
        let stringId = numArt.toString();
        let container = document.getElementById(stringId)
        container.innerHTML = `<input class="display" type="text" placeholder=  "${cant}" name="Cantidad" disabled>`
    }
}


function visualizarCarrito(numArt) {
    renovar = 1
    let stringId = numArt.toString();
    let container = document.getElementById(stringId)
    container.innerHTML = `<input class="display" type="number" placeholder=  "${"Cantidad"}" name="Cantidad" disabled>`
    artSeleccionado = articulos.find((el) => el.codigo === numArt);
    subTotal(artSeleccionado.precio, cant)
    if (cant > 0) {
        let existe = comprados.some(comprado => comprado.codigo === numArt);
        if (existe === false) {
            subTotal(artSeleccionado.precio, cant)
            compra(artSeleccionado.codigo, artSeleccionado.descripcion, artSeleccionado.precio, cant, subtotal);
            let poner = document.getElementById("ponerCantidad")
            poner.innerHTML = `<p> </p>`
            encabezadoTablita()
        } else {
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
        let poner = document.getElementById("ponerCantidad")
        poner.innerHTML = `<p>Indicar Articulo o Cantidad correctamente.</p>`
    }
    cant = 0;
    subtotal = 0;
}








