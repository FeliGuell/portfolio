
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