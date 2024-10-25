// arreglo que contiene las respuestas correctas
let correctas = [1,3,2];

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

//respuesta 1
function verificarRespuesta1() {
    const respuesta = document.getElementById("respuesta").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("result");

    if (respuesta === "10 n hacia la derecha" || respuesta === "10 n hacia la derecha ") {
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.style.color = "green";
    }  
    if (respuesta === "10 n hacia la derecha " || respuesta === "10 n hacia la derecha ") {
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.style.color = "green";
    } 
    else if (respuesta === "10 n" || respuesta === "10 n  ") {
        resultadoDiv.textContent = "¡Correcto!, pero recuerda que es hacia la derecha";
        resultadoDiv.style.color = "green";
    }
    else if (respuesta === "10 n " || respuesta === "10 n  ") {
        resultadoDiv.textContent = "¡Correcto!, pero recuerda que es hacia la derecha";
        resultadoDiv.style.color = "green";
    }
    else {
        resultadoDiv.textContent = "Incorrecto.";
        resultadoDiv.style.color = "red";
    }
}
//respuesta 2
function verificarRespuesta2() {
    const respuesta2 = document.getElementById("respuesta2").value.toLowerCase();
    const resultadoDiv2 = document.getElementById("result2");

    if (respuesta2 === "2 n hacia la izquierda" || respuesta === "2 n hacia la izquierda") {
        resultadoDiv2.textContent = "¡Correcto!";
        resultadoDiv2.style.color = "green";
    } 
    else if (respuesta2 === "2 n hacia la izquierda " || respuesta ===  "2 n hacia la izquierda ") {

        resultadoDiv2.textContent = "¡Correcto!";
        resultadoDiv2.style.color = "green";
    }
    else if (respuesta2 === "2n" || respuesta ===  "2n") {

        resultadoDiv2.textContent = "¡Correcto!, pero recuerda que es hacia la izquierda";
        resultadoDiv2.style.color = "green";
    } 
    else if (respuesta2 === "2n " || respuesta ===   "2n " ) {

        resultadoDiv2.textContent = "¡Correcto!, pero recuerda que es hacia la izquierda";
        resultadoDiv2.style.color = "green";
    } 
    else if (respuesta2 === "2 n" || respuesta === "2 n") {
        resultadoDiv2.textContent = "¡Correcto!, pero recuerda que es hacia la izquierda";
        resultadoDiv2.style.color = "green";
    }
    else if (respuesta2 === "2 n " || respuesta ===  "2 n " ) {

        resultadoDiv2.textContent = "¡Correcto!, pero recuerda que es hacia la izquierda";
        resultadoDiv2.style.color = "green";
    }
    else {
        resultadoDiv2.textContent = "Incorrecto.";
        resultadoDiv2.style.color = "red";
    }
}
//respuesta 3
function verificarRespuesta3() {
    const respuesta3 = document.getElementById("respuesta3").value.toLowerCase();
    const resultadoDiv3 = document.getElementById("result3");

    if (respuesta3 === "5 n"|| respuesta === "5 n") {
        resultadoDiv3.textContent = "¡Correcto!";
        resultadoDiv3.style.color = "green";
    } 
    else if (respuesta3 === "5 n"|| respuesta === "5 n " ) {
        resultadoDiv3.textContent = "¡Correcto!";
        resultadoDiv3.style.color = "green";
    }
    else if (respuesta3 === "5" || respuesta === "5") {
        resultadoDiv3.textContent = "¡Correcto! pero Recuerda que su unidad de medida es n";
        resultadoDiv3.style.color = "green";
    }
    else if (respuesta3 === "5" || respuesta === "5 ") {
        resultadoDiv3.textContent = "¡Correcto! pero Recuerda que su unidad de medida es n";
        resultadoDiv3.style.color = "green";
    }
    
    else {
        resultadoDiv3.textContent = "Incorrecto.";
        resultadoDiv3.style.color = "red";
    }
}
//respuesta 4
function verificarRespuesta4() {
    const respuesta4 = document.getElementById("respuesta4").value.toLowerCase();
    const resultadoDiv4 = document.getElementById("result4");

    if (respuesta4 === "13 n hacia la derecha") {
        resultadoDiv4.textContent = "¡Correcto!";
        resultadoDiv4.style.color = "green";
    } 
    else if (respuesta4 === "13 n hacia la derecha ") {
        resultadoDiv4.textContent = "¡Correcto!";
        resultadoDiv4.style.color = "green";
    } 
    else if (respuesta4 === "13 n") {
        resultadoDiv4.textContent = "¡Correcto!, pero recuerda que es hacia la derecha";
        resultadoDiv4.style.color = "green";
    }
    else if (respuesta4 === "13 n ") {
        resultadoDiv4.textContent = "¡Correcto!, pero recuerda que es hacia la derecha";
        resultadoDiv4.style.color = "green";
    }
    else {
        resultadoDiv4.textContent = "Incorrecto.";
        resultadoDiv4.style.color = "red";
    }
}
//respuesta 5
function verificarRespuesta5() {
    const respuesta5 = document.getElementById("respuesta5").value.toLowerCase();
    const resultadoDiv5 = document.getElementById("result5");

    if (respuesta5 === "7 n hacia la izquierda ") {
        resultadoDiv5.textContent = "¡Correcto!";
        resultadoDiv5.style.color = "green";
    }
    else if (respuesta5 === "7 n hacia la izquierda ") {
        resultadoDiv5.textContent = "¡Correcto!";
        resultadoDiv5.style.color = "green";
    }
    else if (respuesta5 === "7 n") {
        resultadoDiv5.textContent = "¡Correcto!,pero recuerda que es hacia la izquierda";
        resultadoDiv5.style.color = "green";
    }
    else if (respuesta5 === "7 n  ") {
        resultadoDiv5.textContent = "¡Correcto!,pero recuerda que es hacia la izquierda";
        resultadoDiv5.style.color = "green";
    }
    else if (respuesta5 === "7n") {
        resultadoDiv5.textContent = "¡Correcto!,pero recuerda que es hacia la izquierda";
        resultadoDiv5.style.color = "green";
    }
    else if (respuesta5 === "7n ") {
        resultadoDiv5.textContent = "¡Correcto!,pero recuerda que es hacia la izquierda";
        resultadoDiv5.style.color = "green";
    }
    else {
        resultadoDiv5.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv5.style.color = "red";
    }
}
//respuesta 6
function verificarRespuesta6() {
    const respuesta6 = document.getElementById("respuesta6").value.toLowerCase();
    const resultadoDiv6 = document.getElementById("result6");

    if (respuesta6 === "10 n") {
        resultadoDiv6.textContent = "¡Correcto!";
        resultadoDiv6.style.color = "green";
    }
    else if (respuesta6 === "10 n ") {
        resultadoDiv6.textContent = "¡Correcto!";
        resultadoDiv6.style.color = "green";
    }
    else if (respuesta6 === "10n") {
        resultadoDiv6.textContent = "¡Correcto! pero Recuerda que su unidad de medida es m/s";
        resultadoDiv6.style.color = "green";
    }
    else if (respuesta6 === "10n ") {
        resultadoDiv6.textContent = "¡Correcto! pero Recuerda que su unidad de medida es m/s";
        resultadoDiv6.style.color = "green";
    }
    else {
        resultadoDiv6.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv6.style.color = "red";
    }
}
//respuesta 7
function verificarRespuesta7() {
    const respuesta7 = document.getElementById("respuesta7").value.toLowerCase();
    const resultadoDiv7 = document.getElementById("result7");

    if (respuesta7 === "30 n hacia arriba") {
        resultadoDiv7.textContent = "¡Correcto!";
        resultadoDiv7.style.color = "green";
    } 
    else if (respuesta7 === "30 n hacia arriba ") {
        resultadoDiv7.textContent = "¡Correcto!";
        resultadoDiv7.style.color = "green";
    } 
    else if (respuesta7 === "30 n") {
        resultadoDiv7.textContent = "¡Correcto!, pero recuerda que es hacia arriba";
        resultadoDiv7.style.color = "green";
    }
    else if (respuesta7 === "30 n ") {
        resultadoDiv7.textContent = "¡Correcto!, pero recuerda que es hacia arriba";
        resultadoDiv7.style.color = "green";
    }
    else if (respuesta7 === "30") {
        resultadoDiv7.textContent = "¡Correcto! pero pero Recuerda que su unidad de medida es n";
        resultadoDiv7.style.color = "green";
    }
    else if (respuesta7 === "30 ") {
        resultadoDiv7.textContent = "¡Correcto! pero pero Recuerda que su unidad de medida es n";
        resultadoDiv7.style.color = "green";
    }
    else {
        resultadoDiv7.textContent = "Incorrecto. Intenta de nuevo.";
        resultadoDiv7.style.color = "red";
    }
}