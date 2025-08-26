// --- DATOS DEL JUEGO: LABERINTO ---
// ¡10 diseños diferentes! El juego elegirá uno al azar cada vez.
// 0 = Camino, 1 = Pared, 'S' = Inicio, 'E' = Salida
const laberintoDisenos = [
    // Laberinto 1: Clásico
    { layout: [['S', 0, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 2: Sinuoso
    { layout: [['S', 0, 0, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 0, 1, 1], [1, 1, 1, 0, 1, 0, 0, 0, 0, 'E']] },
    // Laberinto 3: Corazón (Simbolico)
    { layout: [[1, 1, 'S', 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 'E', 1, 1]] },
    // Laberinto 4: Abierto
    { layout: [['S', 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0], [0, 1, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 5: Largo
    { layout: [['S', 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 0, 1], [0, 0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 6: Columnas
    { layout: [['S', 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 0, 1, 1], [0, 0, 1, 0, 1, 0, 0, 'E']] },
    // Laberinto 7: Trampa en el medio
    { layout: [['S', 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 1, 0, 0, 1, 0, 1], [1, 0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 8: Esquinas
    { layout: [['S', 0, 0, 1, 1, 1, 1, 1], [1, 1, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 9: Doble Camino
    { layout: [['S', 0, 0, 0, 1, 0, 0, 0], [1, 1, 1, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 1, 0], [1, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 'E']] },
    // Laberinto 10: Final Rápido y Fácil
    { layout: [['S', 0, 0, 0, 0, 'E']] }
];

// --- VARIABLES DE ESTADO DEL JUEGO ---
let jugadorPos = { fila: 0, col: 0 };
let juegoLaberintoActivo = false;
let laberintoActual = [];

// --- FUNCIONES DEL JUEGO: LABERINTO ---

function iniciarLaberinto() {
    const btnIniciar = document.getElementById('btn-iniciar-laberinto');
    const container = document.getElementById('laberinto-container-wrapper');

    // Elige un diseño de laberinto al azar de la lista
    const disenoAleatorio = laberintoDisenos[Math.floor(Math.random() * laberintoDisenos.length)];
    laberintoActual = disenoAleatorio.layout;

    btnIniciar.classList.add('hidden');
    container.classList.remove('hidden');
    container.innerHTML = `
        <div id="laberinto-container"></div>
        <p id="laberinto-mensaje"></p>
    `;

    // Busca la posición inicial 'S' en el laberinto elegido
    for (let i = 0; i < laberintoActual.length; i++) {
        for (let j = 0; j < laberintoActual[i].length; j++) {
            if (laberintoActual[i][j] === 'S') {
                jugadorPos = { fila: i, col: j };
                break;
            }
        }
    }
    
    dibujarLaberinto();
    
    // Activa el control por teclado
    window.removeEventListener('keydown', moverJugador); // Limpia escuchas anteriores
    window.addEventListener('keydown', moverJugador);

    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar Juego';
    btnCerrar.className = 'btn-cerrar-juego';
    btnCerrar.onclick = () => cerrarJuegoLaberinto();
    container.appendChild(btnCerrar);
}

function dibujarLaberinto() {
    const container = document.getElementById('laberinto-container');
    if (!container) return;
    container.innerHTML = '';
    laberintoActual.forEach((fila, i) => {
        const filaDiv = document.createElement('div');
        filaDiv.className = 'laberinto-fila';
        fila.forEach((celda, j) => {
            const celdaDiv = document.createElement('div');
            celdaDiv.className = 'laberinto-celda';
            if (i === jugadorPos.fila && j === jugadorPos.col) {
                celdaDiv.classList.add('laberinto-player');
            } else if (celda === 1) {
                celdaDiv.classList.add('laberinto-wall');
            } else if (celda === 'E') {
                celdaDiv.classList.add('laberinto-exit');
            } else {
                celdaDiv.classList.add('laberinto-path');
            }
            filaDiv.appendChild(celdaDiv);
        });
        container.appendChild(filaDiv);
    });
}

function moverJugador(e) {
    if (!juegoLaberintoActivo) return;
    
    e.preventDefault(); // Evita que la página haga scroll
    let nuevaPos = { ...jugadorPos };

    switch(e.key) {
        case 'ArrowUp':    nuevaPos.fila--; break;
        case 'ArrowDown':  nuevaPos.fila++; break;
        case 'ArrowLeft':  nuevaPos.col--; break;
        case 'ArrowRight': nuevaPos.col++; break;
        default: return;
    }

    if (esMovimientoValido(nuevaPos.fila, nuevaPos.col)) {
        jugadorPos = nuevaPos;
        dibujarLaberinto();
        verificarVictoria();
    }
}

function esMovimientoValido(fila, col) {
    if (fila < 0 || fila >= laberintoActual.length || col < 0 || col >= laberintoActual[0].length) {
        return false; // Fuera del mapa
    }
    if (laberintoActual[fila][col] === 1) {
        return false; // Es una pared
    }
    return true;
}

function verificarVictoria() {
    if (laberintoActual[jugadorPos.fila][jugadorPos.col] === 'E') {
        const mensajeEl = document.getElementById("laberinto-mensaje");
        if(mensajeEl) mensajeEl.textContent = "¡Lo lograste! Así como siempre encontraremos el camino para estar juntos.";
        
        juegoLaberintoActivo = false;
        window.removeEventListener('keydown', moverJugador);
    }
}

function cerrarJuegoLaberinto() {
    juegoLaberintoActivo = false;
    window.removeEventListener('keydown', moverJugador);
    cerrarJuego('btn-iniciar-laberinto', 'laberinto-container-wrapper');
}

function cerrarJuego(btnId, containerId) {
    document.getElementById(btnId).classList.remove('hidden');
    const container = document.getElementById(containerId);
    container.classList.add('hidden');
    container.innerHTML = '';
}