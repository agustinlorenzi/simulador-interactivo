/////////////////Carga de todo el catalogo de productos.

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
const articulo1 = new Articulo(
  1,
  "Crema Hidratante para Manos                             ",
  500,
  "./img/producto1.jpg"
);
const articulo2 = new Articulo(
  2,
  "Oro Liquido sin Formol                                  ",
  350,
  "./img/producto2.jpg"
);
const articulo3 = new Articulo(
  3,
  "Tratamiento a base de aceites 80 ml                     ",
  475,
  "./img/producto3.jpg"
);
const articulo4 = new Articulo(
  4,
  "Kit Antifrizz: 1 Shampoo, 1 Antifrizz y 1 Nutrición     ",
  1050,
  "./img/producto4.jpg"
);
const articulo5 = new Articulo(
  5,
  "Manteca Desmaquillante                                  ",
  735,
  "./img/producto5.jpg"
);
const articulo6 = new Articulo(
  6,
  "Exfoliante de Labios + Bálsamo Hidratante               ",
  1528,
  "./img/producto6.jpg"
);
const articulo7 = new Articulo(
  7,
  "Contorno de Ojos con Cafeína y Q10                      ",
  875,
  "./img/producto7.jpg"
);
const articulo8 = new Articulo(
  8,
  "Mascarilla Capilar                                      ",
  983,
  "./img/producto8.jpg"
);
const articulo9 = new Articulo(
  9,
  "Balsamo de Karité, cacao, almendras, vitamina Hidratante",
  759,
  "./img/producto9.jpg"
);
const articulo10 = new Articulo(
  10,
  "Fragancia Natural                                       ",
  253,
  "./img/producto10.jpg"
);
const articulo11 = new Articulo(
  11,
  "Mascarilla Esfoliante Facial                            ",
  899,
  "./img/producto11.jpg"
);
const articulo12 = new Articulo(
  12,
  "Exfoliante de Labios                                    ",
  423,
  "./img/producto12.jpg"
);

//array que contiene todo el listado de articulos
const articulos1 = [
  articulo1,
  articulo2,
  articulo3,
  articulo4,
  articulo5,
  articulo6,
  articulo7,
  articulo8,
  articulo9,
  articulo10,
  articulo11,
  articulo12,
];

const solicitarArticulos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articulos1);
    }, 1000);
  });
};

let articulos = []

solicitarArticulos()
  .then((res) => {
    articulos = res;
    mostrarCatalogo(articulos);
  });

//Arma todas las cards
function mostrarCatalogo(articulos) {
  articulos.forEach((art) => {
    let content = document.getElementById("vidriera");
    let content1 = document.createElement("div");
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
                            <input class="display" type="text" min="0" placeholder="0" name="cantidad" disabled></input>
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
  });
}




//Consumiendo una api de frases.
//Se usa un array de numeros en nuestro programa, que tiene los numeros de posicion de los objetos
//en el array de objetos que devuelve la api de frases, que contienen ciertas frases en español adecuadas.
//En cada objeto elegido se rescatan los elementos o parametros, text y author.
//Le damos un una demora en la carga del titulo y las frases con un setTimeout.
//Dejamos un setInterval, para que continuamente vaya reproduciendo las frases.
setTimeout(() => {
  let tituloFrase = document.getElementById("tituloFrase");
  tituloFrase.innerHTML = `<h2 class="tituloFrase">Suavizar tu Alma y tu Piel.</h2>`;
  const numeros = [2399, 2206, 1198, 1992, 2039, 2130, 2813, 2843];
  let contador = -1;
  setInterval(() => {
    if (contador < 8) {
      contador++;
    } else {
      contador = -1;
    }
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ccaefc98fbmsha73882bc11b185cp103be5jsne0776200c6ca",
        "X-RapidAPI-Host": "quotes-villa.p.rapidapi.com",
      },
    };

    fetch("https://quotes-villa.p.rapidapi.com/quotes/art", options)
      .then((response) => response.json())
      .then(
        (data) =>
        (contenedorAgregar.innerHTML = `<div class="frase1" id="fetch"><p class="frase">${data[numeros[contador]
        ].text.toUpperCase()}</p> <h6 class="frase">${data[numeros[contador]
        ].author.toUpperCase()}</h6> </div>`
        ));
    let contenedorAgregar = document.getElementById("fetch");
  }, 10000);
}, 1000);




//subtotal cuando se agrega cada articulo al carro.
let subtotal = 0;
function subTotal(precio, cant) {
  subtotal = 0;
  subtotal = precio * cant;
}

//calcula el total del carro. se crea aca un boton para confirmar la compra
let total = 0;
function totalCarrito() {
  verCarrito.innerHTML = ``;
  total = 0;
  if (comprados.length !== 0) {
    agregarArticulos();
    let padre2 = document.getElementById("totalCarrito25");
    padre2.innerHTML = `<h2>Total:  $ ${total}</h2>`;
    let padre3 = document.getElementById("confirmarCompra");
    padre3.innerHTML = `<button class="btn btn-primary" onclick="confirmarCarrito()">Confirmar Carro</button>`;
  } else {
    let padre1 = document.getElementById("verCarrito");
    padre1.innerHTML = ``;
    verCarrito.innerHTML = ``;
    let padre2 = document.getElementById("totalCarrito25");
    padre2.innerHTML = ``;
  }
}

//arma el encabezado de la tablita y desde que se agrega el primer articulo aparecen los input para que el usuario
//complete sus datos para el envio del pedido.
let tituloCarro = 0;
function encabezadoTablita() {
  verCarrito.innerHTML = ``;
  if (tituloCarro === 0 && comprados.length > 0) {
    let padre1 = document.getElementById("tituloCarrito");
    let contenedor1 = document.createElement("div");
    contenedor1.innerHTML = `<h2 class="tituloCarro">Carrito de Compras.</h2>
<table class="table" border="1" cellpading="0" cellspacing="0">
                <tr>
                    <th>COD.</th>
                    <th>DESCRIP.</th>
                    <th>CANT.</th>
                    <th>PRECIO</th>
                    <th>SUBT.</th>
                    <th></th>
                </tr>                                                   
            </table>`;
    padre1.append(contenedor1);
    let datos = document.getElementById("datosCliente");
    datos.innerHTML = `
        <label for="nombre">Nombre y Apellido:*</label>        
        <input class="input" type="text" placeholder="Nombre y Apellido" name="nombre" id="nombre" required>
        <label for="nombre">Dirección:*</label>        
        <input class="input" type="text" placeholder="Dirección" name="direccion" id="direccion" required>
        <label for="nombre">Telefono de Contacto:*</label>        
        <input class="input" type="number" placeholder="Telefono de Contacto" name="nombre" id="telefono" required>                        
        `;
    totalCarrito();
    tituloCarro = 1;
  } else if (comprados.length > 0) {
    verCarrito.innerHTML = ``;
    totalCarrito();
  } else {
    let padre1 = document.getElementById("tituloCarrito");
    padre1.innerHTML = ``;
    verCarrito.innerHTML = ``;
    let padre3 = document.getElementById("confirmarCompra");
    padre3.innerHTML = ``;
    let datos = document.getElementById("datosCliente");
    datos.innerHTML = ``;
    agregarArticulos();
  }
}

//icono de eliminar que se anexa a cada articulo que se agrega al carro.
let iconoEliminar = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`;

//agrega los articulos en el carro. aca tambien se guarda el array de objetos comprados en localstorage.
let posicionArticulo = 0;
function agregarArticulos() {
  posicionArticulo = 0;
  localStorage.clear();
  const guardarLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  for (const articulo of comprados) {
    total = total + articulo.precio * articulo.cantidad;
    let padre = document.getElementById("verCarrito");
    let contenedorAgregar = document.createElement("div");
    contenedorAgregar.innerHTML = `
    <table class="table1" border="1" cellpading="20" cellspacing="0">                       
                    <tr>
                        <td>${articulo.codigo}</td>                            
                        <td>${articulo.descripcion}</td>
                        <td>${articulo.cantidad}</td>
                        <td> $ ${articulo.precio}</td>
                        <td> $ ${articulo.subtotal}</td>
                        <td><span onclick="eliminar(${posicionArticulo})">${iconoEliminar}</span></td>                            
                    </tr>                            
                </table>      
                `;
    padre.append(contenedorAgregar);
    posicionArticulo = posicionArticulo + 1;
    guardarLocalStorage("productosComprados", JSON.stringify(comprados));
  }
}

//elimina los articulos comprados, se la llama desde el icono de tachito que acompaña a cada articulo en el carro.
//en esta funcion tambien se usa la libreria Toastify para mostrar un cartelito en la esquina superior derecha
//con el articulo que se esta quitando.
let aEliminar;
function eliminar(posicion) {
  aEliminar = comprados[posicion];
  Toastify({
    text:
      "Se elimino del carrito " +
      aEliminar.cantidad +
      " " +
      aEliminar.descripcion,
    duration: 3000,
    gravity: "top",
    position: "right",
  }).showToast();
  comprados.splice(posicion, 1);
  totalCarrito();
  encabezadoTablita();
  comprados.length > 0 ? (tituloCarro = 1) : (tituloCarro = 0);
  estadoDatos.innerHTML = ``;
}

//en esta funcion se toman los datos que el usuario ingresa antes de confirmar su pedido.
let nombreCliente = "";
let direccion = "";
let telefono = "";
function tomarDatos() {
  let nombreC = document.getElementById("nombre");
  nombreC.addEventListener("input", () => {
    nombreCliente = nombreC.value;
  });
  let dire = document.getElementById("direccion");
  dire.addEventListener("input", () => {
    direccion = dire.value;
  });
  let telef = document.getElementById("telefono");
  telef.addEventListener("input", () => {
    telefono = telef.value;
  });
}


//al confirmar el carro esta funcion corrobora que el usuario haya cargado cada uno de los datos correspondientes.
//Y cuando el usuario confirma el carro que ya se finalizo la compra, tambien se borra el carro que se estaba
//armando del localstorage.
let estadoDatos = document.getElementById("estadoDatos");
function confirmarCarrito() {
  if (nombreCliente === "") {
    estadoDatos.innerHTML = `Introduzca su nombre por favor.`;
  } else if (direccion === "") {
    estadoDatos.innerHTML = `Introduzca su direccion por favor.`;
  } else if (telefono === "") {
    estadoDatos.innerHTML = `Introduzca su telefono por favor.`;
  } else {
    comprados.length = 0;
    localStorage.clear();
    let padre = document.getElementById("verCarrito");
    padre.innerHTML = ``;
    let padre1 = document.getElementById("tituloCarrito");
    padre1.innerHTML = ``;
    let padre2 = document.getElementById("totalCarrito25");
    padre2.innerHTML = ``;
    let datos = document.getElementById("datosCliente");
    datos.innerHTML = ``;
    estadoDatos.innerHTML = ``;
    tituloCarro = 0;
    telefono = "";
    let padre3 = document.getElementById("confirmarCompra");
    padre3.innerHTML = ``;
    confirmarEnvio();
  }
}


//////////////////////////Uso de Librerias.
//Aca se abre un sweetAlert que le confirma al usuario que se recibio el pedido y que se le enviara prontamente.
function confirmarEnvio() {
  Swal.fire({
    title: `${nombreCliente}`,
    text: `Tu pedido ingreso correctamente. Te lo enviaremos a la brevedad a ${direccion}.`,
    width: 800,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
}

//Se muestra en la esquina superior derecha un cartelito cada vez que se agrega un articulo al carrito.
function articuloCargando(cantidad, descripcion) {
  Toastify({
    text: "Se agrego al carrito " + cantidad + " " + descripcion,
    duration: 3000,
    gravity: "top",
    position: "right",
  }).showToast();
}



// constructor articulos comprados
class Comprado {
  constructor(codigo, descripcion, precio, cantidad, subtotal) {
    this.codigo = Number(codigo);
    this.descripcion = descripcion;
    this.precio = Number(precio);
    this.cantidad = Number(cantidad);
    this.subtotal = Number(subtotal);
  }
}


let comprados = [];

//funcion de compra, forma el array de los objetos articulos comprados
function compra(codigo, descripcion, precio, cantidad, subtotal) {
  const comprado = new Comprado(
    codigo,
    descripcion,
    precio,
    cantidad,
    subtotal
  );
  comprados.push(comprado);
}

//esta clase constructora se usa para rescatar el array de objetos del local storage.
class Comprado1 {
  constructor(obj) {
    this.codigo = parseFloat(obj.codigo);
    this.descripcion = obj.descripcion;
    this.precio = parseFloat(obj.precio);
    this.cantidad = parseFloat(obj.cantidad);
    this.subtotal = parseFloat(obj.subtotal);
  }
}

//esta funcion es para traer el carrito del localstorage
let renovar = 0;
function renovarCarrito() {
  localStorage.length === 0 &&
    (verCarrito.innerHTML = `<p class="ver">El carrito está vacío!</p>`);
  if (renovar === 0) {
    guardados = JSON.parse(localStorage.getItem("productosComprados"));
    if (localStorage.length > 0) {
      for (const objeto of guardados) {
        comprados.push(new Comprado1(objeto));
      }
    }
    encabezadoTablita();
    renovar = 1;
  }
}



//aca se forma un array de objetos con el codigo y la cantidad que vienen de cada articulo individualmente,
//asi las unidades de cada uno quedan bien identificadas y se agregan al carro correctamente.
//Permite fijar cantidades en los display y despues agregarlas, o tambien dejarlas fijas en los mismos para agregar
//mas si se lo desea.
class Puesta {
  constructor(codigo, cantidad) {
    this.codigo = Number(codigo);
    this.cantidad = Number(cantidad);
  }
}

let cantidadPuesta = []

function previa(codigo, cantidad) {
  const previo = new Puesta(codigo, cantidad);
  cantidadPuesta.push(previo);
}




//esta funcion suma la cantidad de un producto que figura en el display de cada uno.
let cantidad = 0;
let stringId;
let existe2;
let artPrevio;
function Agregar(numArt) {
  existe2 = cantidadPuesta.some((previo) => previo.codigo === numArt);
  if (existe2 === false) {
    cantidad = 0;
    cantidad++;
    previa(numArt, cantidad);    
  } else {
    artPrevio = cantidadPuesta.find((el) => el.codigo === numArt);
    artPrevio.cantidad = artPrevio.cantidad + 1;    
  }
  artPrevio = cantidadPuesta.find((el) => el.codigo === numArt);
  stringId = numArt.toString();
  let container = document.getElementById(stringId);
  container.innerHTML = `<input class="display" type="text" min="1" placeholder="${artPrevio.cantidad}" name="cantidad" disabled>`;
}

//esta funcion resta la cantidad de un producto que figura en el display de cada uno.
function Sacar(numArt) {
  existe2 = cantidadPuesta.some((previo) => previo.codigo === numArt);
  artPrevio = cantidadPuesta.find((el) => el.codigo === numArt);
  if (existe2 === true && artPrevio.cantidad > 0) {
    artPrevio = cantidadPuesta.find((el) => el.codigo === numArt);
    artPrevio.cantidad = artPrevio.cantidad - 1;    
    artPrevio = cantidadPuesta.find((el) => el.codigo === numArt);
    stringId = numArt.toString();
    let container = document.getElementById(stringId);
    container.innerHTML = `<input class="display" type="text" min="1" placeholder="${artPrevio.cantidad}" name="cantidad" disabled>`;
  }
}

//se activa al presionar el boton agregar carrito, si habia un carrito en el localstorage tambien lo trae y
//lo tiene en cuenta para continuar la compra.
//Se fija si el usuario puso la cantidad del producto a comprar, sino se lo sugiere.
//Si el usuario agrega mas de un articulo que ya habia comprado se lo suma a la cantidad ya existente en el carrito.
function visualizarCarrito(numArt) {
  renovarCarrito();
  artPrevio = cantidadPuesta.find((el) => el.codigo === numArt);
  artSeleccionado = articulos.find((el) => el.codigo === numArt);
  existe2 = cantidadPuesta.some((previo) => previo.codigo === numArt);
  if (existe2 === true && artPrevio.cantidad > 0) {
    subTotal(artSeleccionado.precio, artPrevio.cantidad);
    articuloCargando(artPrevio.cantidad, artSeleccionado.descripcion);
    let existe = comprados.some((comprado) => comprado.codigo === numArt);
    if (existe === false) {
      compra(
        artSeleccionado.codigo,
        artSeleccionado.descripcion,
        artSeleccionado.precio,
        artPrevio.cantidad,
        subtotal
      );
      let poner = document.getElementById("ponerCantidad");
      poner.innerHTML = `<p> </p>`;
      encabezadoTablita();
      tomarDatos();
    } else {
      artBuscado = comprados.find((el) => el.codigo === numArt);
      artBuscado.cantidad = artBuscado.cantidad + artPrevio.cantidad;
      artBuscado.subtotal = artBuscado.subtotal + subtotal;
      verCarrito.innerHTML = ``;
      totalCarrito();
    }
  } else {
    let poner = document.getElementById("ponerCantidad");
    poner.innerHTML = `<p>COLOCAR CANTIDAD!!!</p>`;
  }
  subtotal = 0;
}
