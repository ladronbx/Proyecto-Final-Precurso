// ***********************************************************************
//                              CLICK BUTTON
// ***********************************************************************


//agregar funcionalidad miArray.pop() Para limimar el último elemento del array con un botón

// Variables para el precio total y el carrito de compras
var precioTotal = 0.00;
var carrito = [];
var preciosProductos = {}; // Objeto para mantener los precios de los productos
var botonesAgregarCarrito = document.querySelectorAll(".agregar-carrito");

// Agregar eventos de clic a los botones "agregar-carrito" e inicializar precios
botonesAgregarCarrito.forEach((boton) => {
    const producto = boton.dataset.producto;
    const precio = parseFloat(boton.dataset.precio);
    boton.addEventListener("click", () => agregarAlCarrito(producto, precio)); //Asigna función al evento click
    preciosProductos[producto] = precio; // Inicializar los precios de los productos
});


// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

// Función para actualizar el carrito y el precio total
function actualizarCarrito() {
    var textoArticulo = "";
    precioTotal = 0.00;

    for (var i = 0; i < carrito.length; i++) {
        textoArticulo += carrito[i].producto +"-"+carrito[i].precio+ "€<br>";
        precioTotal += carrito[i].precio;
    }

    document.getElementById("textoCesta").innerText = "Productos en el carrito:";
    document.getElementById("cantidadProductos").innerText = carrito.length;
    document.querySelector(".textoArticulo").innerHTML = textoArticulo;
    document.getElementById("precioTotal").innerText = precioTotal.toFixed(2);
}


// Botón para realizar compray vaciar cesta
const eliminaTodo = document.querySelector(".botonEliminaTodo");
eliminaTodo.addEventListener('click', () => { carrito = []; actualizarCarrito(); alert('Gracias por tu compra')});




// Botón para eliminar el último
const eliminaUno = document.querySelector(".botonEliminaUno");
eliminaUno.addEventListener('click', () => { carrito.pop(); actualizarCarrito()});



// ***********************************************************************
//                               DRAG&DROP
// ***********************************************************************

// Agregar eventos de arrastrar y soltar a los productos y la cesta
var productos = document.querySelectorAll(".producto");
productos.forEach(function (producto) {
    producto.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", event.target.dataset.producto);
    });
});

var cesta = document.getElementById("cesta");
cesta.addEventListener("dragover", function (event) {
    event.preventDefault();
});

// Función para manejar el evento de soltar un producto en la cesta
cesta.addEventListener("drop", function (event) {
    event.preventDefault();
    var producto = event.dataTransfer.getData("text");
    var precio = preciosProductos[producto]; // Obtener el precio del objeto preciosProductos
    agregarAlCarrito(producto, precio);
});

