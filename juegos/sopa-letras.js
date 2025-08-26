// ¡¡¡PERSONALIZA AQUÍ!!! LISTA AMPLIADA A 10 PALABRAS
// Puedes cambiar estas palabras por las que tengan un significado especial para ustedes.
// Procura que no sean excesivamente largas (máximo 10-11 letras).
const palabrasSopa = ["AMOR", "ABRAZO", "SONRISA", "MAGIA", "JUNTOS", "DESTINO", "BESOS", "SUEÑOS", "SIEMPRE", "CARIÑO"];

// --- NO NECESITAS CAMBIAR NADA DEBAJO DE ESTA LÍNEA ---

const tamanoSopa = 12;
let gridSopa = [];
let seleccionando = false;
let celdaInicio = null;
let palabrasEncontradas = [];

function iniciarSopaDeLetras() {
    // 1. Ocultar botón de inicio y mostrar el área del juego
    const btnIniciar = document.getElementById('btn-iniciar-sopa');
    const container = document.getElementById('sopa-letras-container');
    
    btnIniciar.classList.add('hidden');
    container.classList.remove('hidden');

    // 2. Construir la estructura HTML del juego dentro del contenedor
    container.innerHTML = `
        <div class="sopa-container">
            <div id="sopa-grid"></div>
            <div id="sopa-palabras"></div>
        </div>
    `;
    
    // 3. Obtener los nuevos elementos creados
    const gridDiv = document.getElementById('sopa-grid');
    const palabrasDiv = document.getElementById('sopa-palabras');
    palabrasEncontradas = [];

    // 4. Mostrar la lista de palabras que hay que buscar
    let listaHtml = '<ul>';
    palabrasSopa.forEach(p => listaHtml += `<li id="palabra-${p}">${p}</li>`);
    listaHtml += '</ul>';
    palabrasDiv.innerHTML = listaHtml;

    // 5. Generar y dibujar el tablero del juego
    gridSopa = Array.from({ length: tamanoSopa }, () => Array(tamanoSopa).fill(''));
    colocarPalabras();
    rellenarGrid();
    dibujarGrid();

    // 6. Crear y añadir el botón para cerrar el juego
    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar Juego';
    btnCerrar.className = 'btn-cerrar-juego';
    btnCerrar.onclick = () => cerrarJuego('btn-iniciar-sopa', 'sopa-letras-container');
    container.appendChild(btnCerrar);
}

function colocarPalabras() {
    const direcciones = [[0, 1], [1, 0], [1, 1]]; // Horizontal, Vertical, Diagonal
    palabrasSopa.forEach(palabra => {
        let colocada = false;
        let intentos = 0;
        while (!colocada && intentos < 100) {
            let dir = direcciones[Math.floor(Math.random() * direcciones.length)];
            let fila = Math.floor(Math.random() * tamanoSopa);
            let col = Math.floor(Math.random() * tamanoSopa);
            
            if (cabePalabra(palabra, fila, col, dir)) {
                for (let i = 0; i < palabra.length; i++) {
                    gridSopa[fila + i * dir[0]][col + i * dir[1]] = palabra[i];
                }
                colocada = true;
            }
            intentos++;
        }
    });
}

function cabePalabra(palabra, fila, col, dir) {
    if (fila + (palabra.length - 1) * dir[0] >= tamanoSopa || col + (palabra.length - 1) * dir[1] >= tamanoSopa || fila < 0 || col < 0) {
        return false;
    }
    for (let i = 0; i < palabra.length; i++) {
        const char = gridSopa[fila + i * dir[0]][col + i * dir[1]];
        if (char !== '' && char !== palabra[i]) {
            return false;
        }
    }
    return true;
}

function rellenarGrid() {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < tamanoSopa; i++) {
        for (let j = 0; j < tamanoSopa; j++) {
            if (gridSopa[i][j] === '') {
                gridSopa[i][j] = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            }
        }
    }
}

function dibujarGrid() {
    const gridDiv = document.getElementById('sopa-grid');
    gridDiv.innerHTML = '';
    for (let i = 0; i < tamanoSopa; i++) {
        for (let j = 0; j < tamanoSopa; j++) {
            const cell = document.createElement('div');
            cell.className = 'sopa-cell';
            cell.textContent = gridSopa[i][j];
            cell.dataset.fila = i;
            cell.dataset.col = j;
            cell.addEventListener('mousedown', iniciarSeleccion);
            cell.addEventListener('mouseover', continuarSeleccion);
            cell.addEventListener('mouseup', finalizarSeleccion);
            gridDiv.appendChild(cell);
        }
    }
}

function iniciarSeleccion(e) {
    seleccionando = true;
    celdaInicio = e.target;
    e.target.classList.add('selected');
}

function continuarSeleccion(e) {
    if (seleccionando) {
        e.target.classList.add('selected');
    }
}

function finalizarSeleccion() {
    if (!seleccionando) return;
    seleccionando = false;
    
    const celdasSeleccionadas = document.querySelectorAll('.sopa-cell.selected');
    let palabraFormada = '';
    celdasSeleccionadas.forEach(cell => palabraFormada += cell.textContent);
    
    verificarPalabra(palabraFormada, celdasSeleccionadas);

    setTimeout(() => {
        celdasSeleccionadas.forEach(c => c.classList.remove('selected'));
    }, 500);
}

function verificarPalabra(palabra, celdasSeleccionadas) {
    const palabraInvertida = palabra.split('').reverse().join('');
    
    if ((palabrasSopa.includes(palabra) && !palabrasEncontradas.includes(palabra)) || 
        (palabrasSopa.includes(palabraInvertida) && !palabrasEncontradas.includes(palabraInvertida))) {
        
        const palabraCorrecta = palabrasSopa.includes(palabra) ? palabra : palabraInvertida;
        palabrasEncontradas.push(palabraCorrecta);
        document.getElementById(`palabra-${palabraCorrecta}`).classList.add('found');
        
        celdasSeleccionadas.forEach(c => {
            c.style.backgroundColor = 'var(--accent-secondary)'; // Marcar en dorado
            c.style.color = 'white';
        });

        if (palabrasEncontradas.length === palabrasSopa.length) {
            setTimeout(() => {
                 alert('¡Felicidades! ¡Encontraste todas las palabras de nuestro amor!');
            }, 300);
        }
    }
}

// Función genérica para cerrar el juego
function cerrarJuego(btnId, containerId) {
    document.getElementById(btnId).classList.remove('hidden');
    const container = document.getElementById(containerId);
    container.classList.add('hidden');
    container.innerHTML = ''; // Limpia el contenido para la próxima vez que se inicie
}