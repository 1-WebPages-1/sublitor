/* menu */
document.querySelector('.mobile-menu').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('show')
});

/* Particulas para el fondo de la web */
particlesJS(
    {
        "particles": {
          "number": {
            "value": 60,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#1a1af8"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);

/* para animaciones */
let animadoArriba = document.querySelectorAll(".animadoArriba");
function mostrarScroll1(){
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i < animadoArriba.length; i++){
    let alturaAnimado = animadoArriba[i].offsetTop;
    if(alturaAnimado -450 < scrollTop){
      animadoArriba[i].style.opacity = 1;
      animadoArriba[i].classList.add("mostraArriba");
    }
  }
}

let animadoAbajo = document.querySelectorAll(".animadoAbajo");
function mostrarScroll2(){
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i < animadoAbajo.length; i++){
    let alturaAnimado = animadoAbajo[i].offsetTop;
    if(alturaAnimado -450 < scrollTop){
      animadoAbajo[i].style.opacity = 1;
      animadoAbajo[i].classList.add("mostraAbajo");
    }
  }
}

let animadoDerecha = document.querySelectorAll(".animadoDerecha");
function mostrarScroll3(){
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i < animadoDerecha.length; i++){
    let alturaAnimado = animadoDerecha[i].offsetTop;
    if(alturaAnimado -450 < scrollTop){
      animadoDerecha[i].style.opacity = 1;
      animadoDerecha[i].classList.add("mostraDerecha");
    }
  }
}

let animadoIzquierda = document.querySelectorAll(".animadoIzquierda");
function mostrarScroll4(){
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i < animadoIzquierda.length; i++){
    let alturaAnimado = animadoIzquierda[i].offsetTop;
    if(alturaAnimado -450 < scrollTop){
      animadoIzquierda[i].style.opacity = 1;
      animadoIzquierda[i].classList.add("mostraIzquierda");
    }
  }
}
/* animacion del banner del inicio */
function mostrarAnimacionBan(){
  let animadoDerechaBanner = document.getElementById("animadoDerechaBanner");
  animadoDerechaBanner.style.opacity = 1;
  animadoDerechaBanner.classList.add("mostraDerecha");
}

window.addEventListener('scroll', mostrarScroll1);
window.addEventListener('scroll', mostrarScroll2);
window.addEventListener('scroll', mostrarScroll3);
window.addEventListener('scroll', mostrarScroll4);
window.addEventListener('load', mostrarAnimacionBan);
