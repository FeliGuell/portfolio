
/* BOTON SUBMIT */
let button = document.querySelector('.formcontato__botao');
let buttonText = document.querySelector('.formcontato__tick');

const tickMark = "<svg width=\"40\" height=\"25\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Enviar Mensaje";

button.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (buttonText.innerHTML !== "Enviar Mensaje") {
        buttonText.innerHTML = "Enviar Mensaje";
    } else if (buttonText.innerHTML === "Enviar Mensaje") {
        buttonText.innerHTML = tickMark;
    }
    this.classList.toggle('formcontato__botao__circle');
});


/* TRANSICIONES */


ScrollReveal().reveal('.menu', {
    duration: 1500,
    origin: 'bottom',
    distance: '-100px'
});


ScrollReveal().reveal('.title ', {
    duration: 1500,
    origin: 'left',
    distance: '-100px'
});


ScrollReveal().reveal('.about ', {
    duration: 1500,
    origin: 'right',
    distance: '-100px'
});

ScrollReveal().reveal('.skills ', {
    duration: 1500,
    origin: 'left',
    distance: '-100px'
});


ScrollReveal().reveal('.hobbies ', {
    duration: 1500,
    origin: 'left',
    distance: '-100px'
});


ScrollReveal().reveal('.academic ', {
    duration: 1500,
    origin: 'right',
    distance: '-100px'
});

ScrollReveal().reveal('.experience__section__title ', {
    duration: 1500,
    origin: 'left',
    distance: '-100px'
});


ScrollReveal().reveal('.experience__box ', {
    duration: 1500,
    origin: 'left',
    distance: '-100px'
});

ScrollReveal().reveal('.formcontato ', {
    duration: 1500,
    origin: 'rigth',
    distance: '-100px'
});


/* SCROLL DE NAVEGACIÓN */

const links = document.querySelectorAll(".menu__list__item a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}