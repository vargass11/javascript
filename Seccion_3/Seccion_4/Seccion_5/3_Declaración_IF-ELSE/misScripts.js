function verificar() {
    let ElementoRespuesta = document.
    getElementById("desicion");

    let ElementoEdad = document.
    getElementById("textoEdad");
    let edad = parseInt(ElementoEdad.value);

    if (edad < 18) {
        ElementoRespuesta.textContent = "Tienes" + edad
        + "años, te falta" + 
        (18 - parseInt(edad)).toString() +
        "años para ser mayor de edad";
     } else {
        if (edad >= 18 && edad < 21) {
            ElementoRespuesta.textContent = "tienes" + edad
            + "años, te falta" +
            (21 - parseInt(edad)).toString()+
            "años para " + 21 + ", no puedes comprar licor";
        }
    }
}