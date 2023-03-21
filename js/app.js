import { valida } from "./validacion.js";

const inputs = document.querySelectorAll(".formcontacto__input");
const textArea = document.querySelector(".formcontacto__textarea");


inputs.forEach(input => {
    input.addEventListener("blur", (input)=>{
        valida(input.target);
    })
});

textArea.addEventListener("blur", (input) =>{
    valida(input.target);
});



 /* ----- Botón para cambiar a inglés ------- */

 var check = document.querySelector(".english__language");
 check.addEventListener('click', idioma);

 function idioma(){
    let id = check.checked;
    if (id==true){
        location.href="en/index.html"
    }else{
        location.href="../index.html"
    }
 }


 /* ------- Botón hamburguesa ------- */
const nav = document.querySelector(".menu__nav");
const abrir = document.querySelector(".menu__abrir");
const cerrar = document.querySelector(".menu__cerrar");

console.log(abrir);

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})