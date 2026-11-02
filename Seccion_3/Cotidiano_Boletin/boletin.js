const notas = Array.of(7, 4, 8, 9, 6);

function listarNotas() {
    const lista = document.getElementById('lista-notas');
    lista.innerHTML = '';
    for (let i = 0; i < notas.length; i++) {
        const li = document.createElement('li');
        li.textContent = notas[i];
        lista.appendChild(li);
    }
}

function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    const promedio = suma / notas.length;
    document.getElementById('res-promedio').textContent = promedio;
}

function notaMasAlta() {
    let max = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > max) {
            max = notas[i];
        }
    }
    document.getElementById('res-alta').textContent = max;
}

function hayAplazados() {
    let aplazado = 'No';
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 4) {
            aplazado = 'Sí';
            break;
        }
    }
    document.getElementById('res-aplazados').textContent = aplazado;
}

document.getElementById('btn-promedio').addEventListener('click', calcularPromedio);
document.getElementById('btn-alta').addEventListener('click', notaMasAlta);
document.getElementById('btn-aplazados').addEventListener('click', hayAplazados);

window.addEventListener('load', listarNotas);
