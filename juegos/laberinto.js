// --- DATOS DEL JUEGO: LABERINTO ---
// 0 = Camino, 1 = Pared, 'S' = Inicio, 'E' = Salida
const laberintoDisenos = [
    // Laberinto 1: Clásico
    { layout: [['S', 0, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 2
    { layout: [['S', 0, 0, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 0, 1, 1], [1, 1, 1, 0, 1, 0, 0, 0, 0, 'E']] },
    // Laberinto 3
    { layout: [[1, 1, 'S', 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1, 0, 1], [1, 1, 1, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 'E', 1, 1]] },
    // Laberinto 4
    { layout: [['S', 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 1, 0], [0, 1, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 5
    { layout: [['S', 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 1, 1, 1, 1], [0, 1, 0, 0, 0, 0, 0, 1], [0, 1, 1, 1, 1, 1, 0, 1], [0, 0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 6
    { layout: [['S', 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 0, 1, 1], [0, 0, 1, 0, 1, 0, 0, 'E']] },
    // Laberinto 7
    { layout: [['S', 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 1, 0, 0, 1, 0, 1], [1, 0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 8
    { layout: [['S', 0, 0, 1, 1, 1, 1, 1], [1, 1, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 'E']] },
    // Laberinto 9
    { layout: [['S', 0, 0, 0, 1, 0, 0, 0], [1, 1, 1, 0, 1, 0, 1, 0], [1, 0, 0, 0, 1, 0, 1, 0], [1, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 'E']] },
    // Laberinto 10
    { layout: [['S', 0, 0, 0, 0, 'E']] }
];

// --- VARIABLES DE ESTADO ---
let jugadorPos = { fila: 0, col: 0 };
let juegoLaberintoActivo = false;
let laberintoActual = [];

// --- FUNCIONES ---
function iniciarLaberinto() {
    const btnIniciar = document.getElementById('btn-iniciar-laberinto');
    const container = document.getElementById('laberinto-container-wrapper');

    const disenoAleatorio = laberintoDisenos[Math.floor(Math.random() * laberintoDisenos.length)];
    laberintoActual = disenoAleatorio.layout;

    btnIniciar.classList.add('hidden');
    container.classList.remove('hidden');
    container.innerHTML = `
        <div id="laberinto-container"></div>
        <p id="laberinto-mensaje"></p>
    `;

    // Busca posición inicial 'S'
    for (let i = 0; i < laberintoActual.length; i++) {
        for (let j = 0; j < laberintoActual[i].length; j++) {
            if (laberintoActual[i][j] === 'S') {
                jugadorPos = { fila: i, col: j };
                break;
            }
        }
    }

    // ✅ Activamos el juego
    juegoLaberintoActivo = true;

    dibujarLaberinto();

    window.removeEventListener('keydown', moverJugador);
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
    e.preventDefault();

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
    if (fila < 0 || fila >= laberintoActual.length || col < 0 || col >= laberintoActual[0].length) return false;
    if (laberintoActual[fila][col] === 1) return false;
    return true;
}

function verificarVictoria() {
    if (laberintoActual[jugadorPos.fila][jugadorPos.col] === 'E') {
        const mensajeEl = document.getElementById("laberinto-mensaje");
        if(mensajeEl) mensajeEl.textContent = "¡Lo lograste! 🎉";
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
