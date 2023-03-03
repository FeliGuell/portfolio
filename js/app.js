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
