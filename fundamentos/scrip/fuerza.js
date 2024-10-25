// arreglo que contiene las respuestas correctas
let correctas = [3,2,1,3,2];

// arreglo donde se guardan las respuestas del usuario
let opcion_elegida = [];

// variable para contar respuestas correctas
let cantidad_correctas = 0;

// arreglo para almacenar índices de preguntas incorrectas
let preguntas_incorrectas = [];

// función que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
    // guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    // código para cambiar el color de fondo de los inputs
    id = "p" + num_pregunta;
    lebels = document.getElementById(id).childNodes;
    lebels[3].style.backgroundColor = "#f5cf89";
    lebels[5].style.backgroundColor = "#f5cf89";
    lebels[7].style.backgroundColor = "#f5cf89";

    // doy el color al label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#f6ab39";
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