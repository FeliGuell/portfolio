import { valida } from "./validacion.js";

const inputs = document.querySelectorAll(".formcontato__input");
const textArea = document.querySelector(".formcontato__textarea");


inputs.forEach(input => {
    input.addEventListener("blur", (input)=>{
        valida(input.target);
    })
});

textArea.addEventListener("blur", (input) =>{
    valida(input.target);
});
