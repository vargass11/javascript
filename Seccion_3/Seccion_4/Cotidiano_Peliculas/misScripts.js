function recomendarPelicula() {
    // Capturar los elementos del HTML
    let edadInput = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let resultadoTxt = document.getElementById("resultado");

    
    if (edadInput === "") {
        resultadoTxt.innerText = "Por favor, ingresa tu edad primero.";
        resultadoTxt.style.color = "red";
        return; 
    }

    let edad = parseInt(edadInput);
    let pelicula = "";

    switch (genero) {
        case "Drama":
            if (edad < 13) {
                pelicula = "Casablanca";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "The Shawshank Redemption";
            } else {
                pelicula = "Taxi Driver";
            }
            break;

        case "Comedia":
            if (edad < 13) {
                pelicula = "Back to the Future";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "The Truman Show";
            } else {
                pelicula = "The Wolf of Wall Street";
            }
            break;

        case "Musical":
            if (edad < 13) {
                pelicula = "La La Land";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "Les Misérables";
            } else {
                pelicula = "The Rocky Horror Picture Show";
            }
            break;

        case "Crimen":
            if (edad < 13) {
                pelicula = "No hay opciones para esta edad";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "El Secreto de sus Ojos";
            } else {
                pelicula = "The Godfather";
            }
            break;

        default:
            pelicula = "Género no válido";
    }


    resultadoTxt.innerText = pelicula;
    resultadoTxt.style.color = "#333"; // Restablece el color normal por si hubo error antes
}

function reiniciarFormulario() {
    document.getElementById("edad").value = "";
    document.getElementById("genero").selectedIndex = 0;
    document.getElementById("resultado").innerText = "Aquí aparecerá tu película...";
    document.getElementById("resultado").style.color = "#777";
}
