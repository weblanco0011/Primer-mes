// --- DATOS DEL JUEGO: MEMORAMA CON EMOJIS ---
// ¡LISTA ACTUALIZADA A 9 EMOJIS!
const emojisMemorama = ['🤍', '🥺', '🤤', '🫶🏼', '🥵', '😏', '🥹', '😍', '😘'];

// --- VARIABLES DE ESTADO DEL JUEGO ---
let cartasGiradas = [];
let aciertos = 0;

// --- FUNCIONES DEL JUEGO: MEMORAMA ---

function iniciarMemorama() {
    const btnIniciar = document.getElementById('btn-iniciar-memorama');
    const container = document.getElementById('memorama-container');
    
    btnIniciar.classList.add('hidden');
    container.classList.remove('hidden');
    container.innerHTML = ''; // Limpiar tablero anterior
    aciertos = 0;
    cartasGiradas = [];

    // Duplica los emojis para crear los 18 pares y los baraja
    const cartas = [...emojisMemorama, ...emojisMemorama];
    cartas.sort(() => 0.5 - Math.random());

    // Crea cada carta en el HTML
    cartas.forEach(emoji => {
        const cartaDiv = document.createElement('div');
        cartaDiv.className = 'memorama-carta';
        cartaDiv.dataset.id = emoji;
        cartaDiv.innerHTML = `
            <div class="cara anverso"></div>
            <div class="cara reverso">${emoji}</div>
        `;
        cartaDiv.addEventListener('click', girarCarta);
        container.appendChild(cartaDiv);
    });

    // Crea y añade el botón de cerrar
    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar Juego';
    btnCerrar.className = 'btn-cerrar-juego';
    btnCerrar.onclick = () => cerrarJuegoMemorama();
    container.parentElement.appendChild(btnCerrar);
}

function girarCarta() {
    if (cartasGiradas.length < 2 && !this.classList.contains('girada')) {
        this.classList.add('girada');
        cartasGiradas.push(this);

        if (cartasGiradas.length === 2) {
            setTimeout(verificarPar, 1000);
        }
    }
}

function verificarPar() {
    const [carta1, carta2] = cartasGiradas;
    if (carta1.dataset.id === carta2.dataset.id) {
        // Es un par correcto
        carta1.removeEventListener('click', girarCarta);
        carta2.removeEventListener('click', girarCarta);
        aciertos++;
        if (aciertos === emojisMemorama.length) {
            alert('¡Felicidades! ¡Has encontrado todos los pares!');
        }
    } else {
        // No es un par
        carta1.classList.remove('girada');
        carta2.classList.remove('girada');
    }
    cartasGiradas = [];
}

function cerrarJuegoMemorama() {
    document.getElementById('btn-iniciar-memorama').classList.remove('hidden');
    const container = document.getElementById('memorama-container');
    container.classList.add('hidden');
    container.innerHTML = '';

    const btnCerrarExistente = container.parentElement.querySelector('.btn-cerrar-juego');
    if (btnCerrarExistente) {
        btnCerrarExistente.remove();
    }
}

function cerrarJuego(btnId, containerId) {
    document.getElementById(btnId).classList.remove('hidden');
    const container = document.getElementById(containerId);
    container.classList.add('hidden');
    container.innerHTML = '';
}