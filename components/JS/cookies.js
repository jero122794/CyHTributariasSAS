document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookies = document.getElementById("accept-cookies");

    // Comprueba si ya se ha aceptado el aviso de cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }

    // Maneja el clic en el botón "Aceptar"
    acceptCookies.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", true);
        cookieBanner.style.display = "none";
    });
});