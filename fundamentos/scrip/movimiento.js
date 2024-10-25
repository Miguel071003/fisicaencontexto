// arreglo que contiene las respuestas correctas
let correctas = ["R", "M", "R", "M", "R"];

// arreglo donde se guardan las respuestas del usuario
let opcion_elegida = ["", "", "", "", ""]; // Inicializa con valores vacíos para cada pregunta

let cantidad_correctas = 0;

// arreglo para almacenar índices de preguntas incorrectas
let preguntas_incorrectas = [];

// función que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
    // guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.querySelector('input').value;

    // el siguiente código es para poner en color blanco 
    // el fondo de los inputs para cuando elige otra opción
    let id = "p" + num_pregunta;

    let labels = document.getElementById(id).childNodes;
    labels[1].style.backgroundColor = "#f5cf89"; // Cambié los índices para que coincidan con los labels
    labels[3].style.backgroundColor = "#f5cf89";

    // doy el color a label seleccionado
    seleccionada.style.backgroundColor = "#f6ab39";
}

// función que compara los arreglos para saber cuántas estuvieron correctas
function corregir() {
    cantidad_correctas = 0;
    preguntas_incorrectas = []; // reiniciar el arreglo de preguntas incorrectas

    for (let i = 0; i < correctas.length; i++) {
        if (correctas[i] == opcion_elegida[i]) {
            cantidad_correctas++;
        } else {
            preguntas_incorrectas.push(i + 1); // almacenar el índice de la pregunta incorrecta
        }
    }

    // Mostrar el resultado
    let resultadoTexto = `Cantidad de respuestas correctas: ${cantidad_correctas}.`;
    if (preguntas_incorrectas.length > 0) {
        resultadoTexto += ` Preguntas incorrectas: ${preguntas_incorrectas.join(', ')}.`;
    } else {
        resultadoTexto += " ¡Todas las respuestas son correctas!";
    }

    document.getElementById("resultado").innerHTML = resultadoTexto;
}
