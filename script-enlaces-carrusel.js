document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".categorias section img");
    
    const imageUrls = [
        "pages/playstation.html",
        "pages/nintendo.html",
        "pages/XBOX.html",
        "pages/pc.html",
        "pages/cine.html",
        "pages/novedades.html"
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
