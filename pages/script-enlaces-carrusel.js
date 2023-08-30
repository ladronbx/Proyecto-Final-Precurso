document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".categorias section img");
    
    const imageUrls = [
        "playstation.html",
        "nintendo.html",
        "XBOX.html",
        "pc.html",
        "cine.html",
        "novedades.html"
    ];
    
    images.forEach((image, index) => {
        image.addEventListener("click", function() {
            // Obtén la URL de destino según la índice de imagen
            const destinationUrl = imageUrls[index];
            
            // Abre la URL en una nueva pestaña
            window.open(destinationUrl, "_blank");
        });
    });
});
