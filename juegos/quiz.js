// --- DATOS DEL JUEGO: QUIZ PERSONALIZADO ---
// Estas son las 5 preguntas con tus respuestas correctas y opciones que he creado.
const preguntasQuiz = [
    {
        pregunta: "De todos los equipos que existen, ¿cuál es el equipo de mis amores, el que defiendo a muerte?",
        respuestas: [
            "Millonarios",          // Opción incorrecta (Rival)
            "Atletico Nacional",    // Opción correcta
            "Real Madrid"           // Opción incorrecta (Equipo internacional popular)
        ],
        correcta: 1 // El índice de "Atletico Nacional"
    },
    {
        pregunta: "Una fecha muy importante para que la anotes en el calendario... ¿Cuál es mi fecha exacta de nacimiento?",
        respuestas: [
            "16 de Noviembre del 2003", // Opción incorrecta (Día cambiado)
            "06 de Octubre del 2003",   // Opción incorrecta (Mes cambiado)
            "06 de Noviembre del 2003"  // Opción correcta
        ],
        correcta: 2 // El índice de la fecha correcta
    },
    {
        pregunta: "Esta es de atención al detalle, ¿cuántos años tengo actualmente?",
        respuestas: [
            "20",                   // Opción incorrecta (Un año menos)
            "22",                   // Opción incorrecta (Un año más)
            "21"                    // Opción correcta
        ],
        correcta: 2 // El índice de la edad correcta
    },
    {
        pregunta: "En el mundo del fútbol, ¿quién es ese jugador que considero mi ídolo máximo?",
        respuestas: [
            "Lionel Messi",         // Opción incorrecta (El rival clásico)
            "Cristiano Ronaldo",    // Opción correcta
            "Neymar Jr."            // Opción incorrecta (Otro jugador popular)
        ],
        correcta: 1 // El índice de "Cristiano Ronaldo"
    },
    {
        pregunta: "Cuando me pierdo por horas jugando, ¿cuál es ese videojuego que te he dicho que es mi favorito de todos los tiempos?",
        respuestas: [
            "Wild Rift",            // Opción incorrecta (Juego similar)
            "Fortnite",             // Opción incorrecta (Juego muy popular pero diferente)
            "Mobile Legends"        // Opción correcta
        ],
        correcta: 2 // El índice de "Mobile Legends"
    }
];

// --- FUNCIONES DEL JUEGO: QUIZ ---

/**
 * Inicia el juego del Quiz, mostrando el tablero y ocultando el botón de inicio.
 */
function iniciarQuiz() {
    const btnIniciar = document.getElementById('btn-iniciar-quiz');
    const container = document.getElementById('quiz-container');

    // Oculta el botón "Empezar" y muestra el área del juego
    btnIniciar.classList.add('hidden');
    container.classList.remove('hidden');
    container.innerHTML = '<h2>¿Qué tanto me conoces?</h2>'; 

    // Crea el HTML para cada pregunta
    preguntasQuiz.forEach((item, index) => {
        let preguntaDiv = document.createElement('div');
        preguntaDiv.className = 'pregunta-quiz';
        preguntaDiv.innerHTML = `
            <h4>${index + 1}. ${item.pregunta}</h4>
            <div id="respuestas-${index}">
                ${item.respuestas.map((respuesta, i) => `<button onclick="verificarRespuesta(${index}, ${i})">${respuesta}</button>`).join('')}
            </div>
            <p id="resultado-${index}"></p>
        `;
        container.appendChild(preguntaDiv);
    });
    
    // Crea y añade el botón para cerrar el juego
    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar Juego';
    btnCerrar.className = 'btn-cerrar-juego';
    btnCerrar.onclick = () => cerrarJuego('btn-iniciar-quiz', 'quiz-container');
    container.appendChild(btnCerrar);
}

/**
 * Verifica si la respuesta seleccionada por el usuario es correcta.
 */
function verificarRespuesta(indicePregunta, indiceRespuesta) {
    const resultadoP = document.getElementById(`resultado-${indicePregunta}`);
    const botones = document.querySelectorAll(`#respuestas-${indicePregunta} button`);
    
    if (indiceRespuesta === preguntasQuiz[indicePregunta].correcta) {
        resultadoP.textContent = "¡Correcto! Sabía que lo recordarías, mi amor.";
        resultadoP.style.color = "#4CAF50"; // Verde
    } else {
        resultadoP.textContent = "¡Casi! Pero no te preocupes, tenemos toda la vida para conocernos.";
        resultadoP.style.color = "#f44336"; // Rojo
    }
    
    // Deshabilita todos los botones de esa pregunta una vez respondida
    botones.forEach(boton => boton.disabled = true);
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