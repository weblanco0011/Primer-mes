// --- DATOS DEL JUEGO: ADIVINA LA CANCIÓN ---
// ¡Personalizado con tus 5 canciones especiales!
const cancionesJuego = [
    {
        // Ruta al archivo de audio que guardaste en assets/audio/
        pista: 'assets/audio/la-fila-hakuna.mp3', 
        opciones: [
            "Huracán - Hakuna",     // Opción incorrecta
            "La Fila - Hakuna",     // Opción correcta
            "Color Esperanza - Diego Torres" // Opción incorrecta
        ],
        correcta: 1 // El índice de "La Fila - Hakuna"
    },
    {
        pista: 'assets/audio/huracan-hakuna.mp3',
        opciones: [
            "Huracán - Hakuna",     // Opción correcta
            "Noche de San Juan - Hakuna", // Opción incorrecta
            "Clavado en un Bar - Maná"  // Opción incorrecta
        ],
        correcta: 0 // El índice de "Huracán - Hakuna"
    },
    {
        pista: 'assets/audio/sombra-kaleth.mp3',
        opciones: [
            "Sombra de mi Alma - Kaleth Morales", // Opción correcta
            "Los Caminos de la Vida - Los Diablitos", // Opción incorrecta (Otro vallenato clásico)
            "Obsesión - Peter Manjarrés"       // Opción incorrecta
        ],
        correcta: 0 // El índice de "Sombra de mi Alma - Kaleth Morales"
    },
    {
        pista: 'assets/audio/me-rehuso-danny.mp3',
        opciones: [
            "Despacito - Luis Fonsi", // Opción incorrecta
            "Mi Gente - J Balvin",   // Opción incorrecta
            "Me Rehúso - Danny Ocean" // Opción correcta
        ],
        correcta: 2 // El índice de "Me Rehúso - Danny Ocean"
    },
    {
        pista: 'assets/audio/me-enamore-marilyn.mp3',
        opciones: [
            "Me Enamoré - Agrupación Marilyn",   // Opción correcta
            "Cómo te voy a olvidar - Los Ángeles Azules", // Opción incorrecta (Cumbia popular)
            "El Ladrón - La Sonora Dinamita"         // Opción incorrecta
        ],
        correcta: 0 // El índice de "Me Enamoré - Agrupación Marilyn"
    }
];

// --- FUNCIONES DEL JUEGO: ADIVINA LA CANCIÓN ---

/**
 * Inicia el juego, mostrando el tablero y ocultando el botón de inicio.
 */
function iniciarAdivinaCancion() {
    const btnIniciar = document.getElementById('btn-iniciar-adivina');
    const container = document.getElementById('adivina-cancion-container');

    btnIniciar.classList.add('hidden');
    container.classList.remove('hidden');
    container.innerHTML = '<h2>Escucha y adivina:</h2>';

    cancionesJuego.forEach((cancion, index) => {
        const divJuego = document.createElement('div');
        divJuego.className = 'cancion-item';
        // Crea el HTML para cada canción: reproductor, botones y espacio para el resultado.
        divJuego.innerHTML = `
            <h4>Canción ${index + 1}</h4>
            <audio controls src="${cancion.pista}"></audio>
            <div id="opciones-cancion-${index}">
                ${cancion.opciones.map((opcion, i) => `<button onclick="verificarCancion(${index}, ${i})">${opcion}</button>`).join('')}
            </div>
            <p id="resultado-cancion-${index}"></p>
        `;
        container.appendChild(divJuego);
    });

    // Crea y añade el botón para cerrar el juego
    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar Juego';
    btnCerrar.className = 'btn-cerrar-juego';
    btnCerrar.onclick = () => cerrarJuego('btn-iniciar-adivina', 'adivina-cancion-container');
    container.appendChild(btnCerrar);
}

/**
 * Verifica si la opción elegida por el usuario es la correcta.
 */
function verificarCancion(indiceCancion, indiceOpcion) {
    const resultadoP = document.getElementById(`resultado-cancion-${indiceCancion}`);
    const botones = document.querySelectorAll(`#opciones-cancion-${indiceCancion} button`);

    if (indiceOpcion === cancionesJuego[indiceCancion].correcta) {
        resultadoP.textContent = "¡Correcto! Esta canción es especial para nosotros.";
        resultadoP.style.color = "#4CAF50"; // Verde
    } else {
        resultadoP.textContent = "Esa no es, ¡pero también es buena!";
        resultadoP.style.color = "#f44336"; // Rojo
    }
    
    // Deshabilita los botones de esa canción una vez que se ha respondido.
    botones.forEach(b => b.disabled = true);
}

/**
 * Cierra un juego, ocultando su contenedor y mostrando de nuevo el botón de inicio.
 */
function cerrarJuego(btnId, containerId) {
    document.getElementById(btnId).classList.remove('hidden');
    const container = document.getElementById(containerId);
    container.classList.add('hidden');
    container.innerHTML = ''; // Limpia el contenido para la próxima vez
}