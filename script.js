/* ===================================================================
   SCRIPT DE FUNCIONALIDAD PRINCIPAL
   
   ÍNDICE:
   1. Lógica para el Control de la Música de Fondo
   2. Lógica para la Cuenta Regresiva (Solo en index.html)
   3. Lógica para Personajes Flotantes
=================================================================== */


/* ===================================================================
   1. LÓGICA PARA EL CONTROL DE LA MÚSICA DE FONDO
   (Funciona en todas las páginas)
=================================================================== */

const musicaFondo = document.getElementById('banda-sonora');
const botonControl = document.getElementById('control-musica');

if (musicaFondo && botonControl) {
    botonControl.addEventListener('click', function() {
        if (musicaFondo.paused) {
            musicaFondo.play();
            botonControl.innerHTML = '⏸️';
        } else {
            musicaFondo.pause();
            botonControl.innerHTML = '🎵';
        }
    });
}


/* ===================================================================
   2. LÓGICA PARA LA CUENTA REGRESIVA
   (Solo se ejecuta si encuentra el elemento del timer en la página)
=================================================================== */

const timerElement = document.getElementById("timer");

if (timerElement) {
    const fechaObjetivo = new Date("Aug 31, 2025 09:00:00").getTime();
    const timer = setInterval(function() {
        const ahora = new Date().getTime();
        const distancia = fechaObjetivo - ahora;
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
        
        timerElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

        if (distancia < 0) {
            clearInterval(timer);
            timerElement.innerHTML = "¡EL DÍA LLEGÓ! ¡YA VOY A VERTE!";
        }
    }, 1000);
}


/* ===================================================================
   3. LÓGICA PARA PERSONAJES FLOTANTES (ACTUALIZADO)
   (Funciona en todas las páginas)
=================================================================== */

const lotso = document.getElementById('lotso-animado');
const marie = document.getElementById('marie-animada');

if (lotso && marie) {

    /**
     * Calcula una nueva posición aleatoria y mueve el personaje.
     * @param {HTMLElement} personaje - El elemento de la imagen a mover.
     */
    function moverPersonaje(personaje) {
        const altoPantalla = window.innerHeight;
        const anchoPantalla = window.innerWidth;
        const tamanoPersonaje = 80;

        const nuevaY = Math.random() * (altoPantalla - tamanoPersonaje);
        const nuevaX = Math.random() * (anchoPantalla - tamanoPersonaje);

        personaje.style.top = `${nuevaY}px`;
        personaje.style.left = `${nuevaX}px`;
    }

    // Movemos los personajes a una posición inicial aleatoria en cuanto carga la página.
    moverPersonaje(lotso);
    moverPersonaje(marie);

    // Creamos un intervalo que moverá a Lotso cada 5 segundos (5000 ms).
    setInterval(() => {
        moverPersonaje(lotso);
    }, 5000);

    // Creamos otro intervalo para Marie. AHORA EMPIEZA AL MISMO TIEMPO.
    setInterval(() => {
        moverPersonaje(marie);
    }, 5000); // Marie también se moverá cada 5 segundos.
}