// Mostrar alerta de bienvenida cuando la página termine de cargar
window.onload = function () {
    alert("¡Bienvenido a la Galería del Agua! 💧🌊");
};

// Seleccionar las imágenes de la galería y los elementos del visor de imagen
const imagenes = document.querySelectorAll(".galeria img");
const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");

// Añadir un evento click a cada imagen para abrirla en el visor ampliado
imagenes.forEach((img) => {
    img.addEventListener("click", () => {
        visor.style.display = "flex"; // Mostrar el visor
        imagenGrande.src = img.src; // Cambiar la imagen grande al origen de la imagen clicada
    });
});

// Cerrar el visor de imagen ampliada cuando se hace clic en el fondo del visor
visor.addEventListener("click", () => {
    visor.style.display = "none";
});

// Función para mostrar u ocultar el bloque de información de la OMS
function mostrarInfo() {
    const info = document.getElementById("info");

    if (info.style.display === "block") {
        info.style.display = "none"; // Ocultar si ya está visible
    } else {
        info.style.display = "block"; // Mostrar si está oculto
    }
}

// Cambiar el texto del botón al pasar el cursor sobre él para hacerlo más interactivo
const boton = document.querySelector("button");

boton.addEventListener("mouseover", () => {
    boton.textContent = "Haz clic para aprender 💦";
});

boton.addEventListener("mouseout", () => {
    boton.textContent = "Información sobre el agua según la OMS";
});