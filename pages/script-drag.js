// Variables para el precio total y el carrito de compras
var precioTotal = 0.00;
var carrito = [];
var preciosProductos = {}; // Objeto para mantener los precios de los productos

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
        textoArticulo += carrito[i].producto + "<br>";
        precioTotal += carrito[i].precio;
    }

    document.getElementById("textoCesta").innerText = "Productos en el carrito:";
    document.getElementById("cantidadProductos").innerText = carrito.length;
    document.querySelector(".textoArticulo").innerHTML = textoArticulo;
    document.getElementById("precioTotal").innerText = precioTotal.toFixed(2);
}

// Agregar eventos de clic a los botones "agregar-carrito"
var botonesAgregarCarrito = document.querySelectorAll(".agregar-carrito");
botonesAgregarCarrito.forEach(function (boton) {
    boton.addEventListener("click", function () {
        var producto = boton.dataset.producto;
        var precio = parseFloat(boton.dataset.precio);
        agregarAlCarrito(producto, precio);
    });
});

// Inicializar los precios de los productos
botonesAgregarCarrito.forEach(function (boton) {
    var producto = boton.dataset.producto;
    var precio = parseFloat(boton.dataset.precio);
    preciosProductos[producto] = precio;
});

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

// Botón para eliminar el pedido
function botonElimina() {
    carrito = [];
    actualizarCarrito();
}
