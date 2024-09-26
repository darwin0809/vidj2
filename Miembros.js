// script.js

document.addEventListener("DOMContentLoaded", function () {
    const miembrosBtn = document.getElementById("miembrosBtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Muestra el menú desplegable al hacer clic
    miembrosBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownContent.classList.toggle("show");
    });

    // Oculta el menú desplegable si se hace clic en otro lugar de la pantalla
    window.addEventListener("click", function (event) {
        if (!event.target.matches("#miembrosBtn")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});
