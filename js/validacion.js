export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Debe contener como máximo 50 caracteres"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Debe contener como máximo 50 caracteres"
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Debe contener como máximo 300 caracteres"
    },

}


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}