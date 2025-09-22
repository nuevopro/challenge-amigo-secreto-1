/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim(); // Eliminar espacios al inicio y final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    nombreInput.value = "";

    // Actualizar la lista en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista actual
    lista.innerHTML = "";

    // Iterar sobre el arreglo y crear un <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento de resultado
    document.getElementById("resultado").innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</p>`;
} 