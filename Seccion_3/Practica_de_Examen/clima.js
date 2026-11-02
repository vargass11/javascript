const temperaturas = [
    25,
    28,
    22,
    30,
    18,
    24,
    27
];


function listarTemperaturas() {
    const listaHTML = document.getElementById("lista-temperaturas");
    if (!listaHTML) return;
    
    listaHTML.innerHTML = "";

    temperaturas.forEach(temp => {
        const li = document.createElement("li");
        li.textContent = `${temp}°C`;
        listaHTML.appendChild(li);
    });
}

function calcularPromedio() {
    let suma = 0;
    
    for (let i = 0; i < temperaturas.length; i++) {
        suma += temperaturas[i];
    }
    
    const promedio = suma / temperaturas.length;
    document.getElementById("contenedor-resultados").textContent = 
        `El promedio de las temperaturas de la semana es: ${promedio.toFixed(2)}°C`;
}

function temperaturaMaxima() {
    let maxima = temperaturas[0];

    for (let i = 1; i < temperaturas.length; i++) {
        if (temperaturas[i] > maxima) {
            maxima = temperaturas[i];
        }
    }

    document.getElementById("contenedor-resultados").textContent = 
        `La temperatura más alta registrada es: ${maxima}°C`;
}

function hayDiasFrios() {
    let frio = "No";

    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] < 20) {
            frio = "Sí";
            break;
        }
    }

    document.getElementById("contenedor-resultados").textContent = 
        `¿Hubo días fríos (< 20 grados)? ${frio}`;
}

window.onload = listarTemperaturas;
