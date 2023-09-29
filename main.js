const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const whatsapp = document.querySelector("#whatsapp");
const contacto = document.querySelector("#bt-contacto");
const salirads = document.querySelector(".cerrar-ads");
const ads2 = document.querySelector(".ads2");

salirads.addEventListener("click", () => {
        ads2.classList.add("hiden");
})