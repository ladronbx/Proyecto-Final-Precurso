// Obtén todos los botones "Agregar al carrito"
const agregarCarritoButtons = document.querySelectorAll(".agregar-carrito");

// Agrega un evento de clic a cada botón
agregarCarritoButtons.forEach(button => {
    button.addEventListener("click", () => {
        const producto = button.getAttribute("data-producto");
        const precio = parseFloat(button.getAttribute("data-precio"));

        // Verifica si ya existe un carrito en localStorage
        const existingCart = JSON.parse(localStorage.getItem("carrito")) || [];

        // Agrega el producto al carrito en localStorage
        existingCart.push({ producto, precio });
        localStorage.setItem("carrito", JSON.stringify(existingCart));

        alert("Producto agregado al carrito");
    });
});


// Obtén la lista de la cesta
const cestaList = document.getElementById("cesta-list");

// Obtén los productos de localStorage
const productosEnCesta = JSON.parse(localStorage.getItem("carrito")) || [];

// Agrega cada producto a la lista en la cesta
productosEnCesta.forEach(producto => {
    const listItem = document.createElement("li");
    listItem.textContent = `${producto.producto} - Precio: ${producto.precio}€`;
    cestaList.appendChild(listItem);
});
