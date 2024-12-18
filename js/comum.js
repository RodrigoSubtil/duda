// ---- MENU HAMBURGUER - COMUM ------------------------------------------------------------------------------------

let menuHamburguer = document.querySelector(".cabecalho__menu--icone");
let menuMobile = document.querySelector(".menu-mobile");

menuHamburguer.addEventListener("click", () => {
    if (menuMobile.classList.contains("abrir-menu")) { // Verifica se o menuMobile já tem a classe "abrir-menu"
        menuMobile.classList.remove("abrir-menu");
    } else {
        menuMobile.classList.add("abrir-menu");
    }
});