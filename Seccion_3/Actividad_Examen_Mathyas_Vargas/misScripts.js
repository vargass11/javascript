
        function hacerCalculos() {
            
            var inputPlata = document.getElementById('plata').value;
            var inputCant = document.getElementById('num_personas').value;
            var categoria = document.getElementById('tipo_act').value;
            
            var err = document.getElementById('error-div');
            var res = document.getElementById('pantalla-resultado');

            
            err.innerHTML = "";
            res.innerHTML = "";
            res.style.display = "none";

            if (inputPlata === "" || inputCant === "" || categoria === "") {
                err.innerHTML = "Error: hay campos vacios.";
                return;
            }

            var presupuesto = parseFloat(inputPlata);
            var personas = parseInt(inputCant);

            if (isNaN(presupuesto) || isNaN(personas)) {
                err.innerHTML = "Error: meta numeros validos.";
                return;
            }
            if (presupuesto < 0) {
                err.innerHTML = "Error: no se aceptan presupuestos negativos.";
                return;
            }
            if (personas <= 0) {
                err.innerHTML = "Error: la gente tiene que ser mayor a cero.";
                return;
            }

            var recomendacion = "";

        
            switch (categoria) {
                case "Deportes":
                    if (presupuesto < 8000) {
                        recomendacion = "Caminata recreativa";
                    } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                        recomendacion = "Alquiler de cancha";
                    } else {
                        recomendacion = "Actividad deportiva especializada";
                    }
                    break;

                case "Entretenimiento":
                    if (presupuesto < 8000) {
                        recomendacion = "Actividad económica";
                    } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                        recomendacion = "Entrada al cine";
                    } else {
                        recomendacion = "Concierto o espectáculo";
                    }
                    break;

                case "Turismo":
                    if (presupuesto < 8000) {
                        recomendacion = "Visita a parque público";
                    } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                        recomendacion = "Tour local";
                    } else {
                        recomendacion = "Excursión de día completo";
                    }
                    break;

                case "Actividades familiares":
                    if (presupuesto < 8000) {
                        recomendacion = "Picnic familiar";
                    } else if (presupuesto >= 8000 && presupuesto <= 15000) {
                        recomendacion = "Salida recreativa";
                    } else {
                        recomendacion = "Parque temático o actividad especial";
                    }
                    break;
            }

            
            var porcDescuento = 0;

            if (personas >= 1 && personas <= 4) {
                porcDescuento = 0;
            } else if (personas >= 5 && personas <= 8) {
                porcDescuento = 10;
            } else if (personas >= 9) {
                porcDescuento = 15;
            }

            
            var montoDesc = presupuesto * (porcDescuento / 100);
            var totalFinal = presupuesto - montoDesc;

            
            res.innerHTML = "<p><b>Actividad recomendada:</b> " + recomendacion + "</p>" +
                            "<p><b>Cantidad de personas:</b> " + personas + "</p>" +
                            "<p><b>Descuento grupal:</b> " + porcDescuento + "%</p>" +
                            "<p><b>Monto del descuento:</b> ₡" + montoDesc + "</p>" +
                            "<p><b>Presupuesto final:</b> ₡" + totalFinal + "</p>";

            res.style.display = "block";
        }

        
        function limpiarTodo() {
            document.getElementById('plata').value = "";
            document.getElementById('num_personas').value = "";
            document.getElementById('tipo_act').value = "";
            document.getElementById('error-div').innerHTML = "";
            document.getElementById('pantalla-resultado').style.display = "none";
        }
