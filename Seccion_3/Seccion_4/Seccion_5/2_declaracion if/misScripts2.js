function evaluarCompra(cantidadDisponible) {
            let elementoRespuesta = document.
            getElementById("decision");

            // Relacionado con tu input de id="numero"
            let elementoCantidad = document.
            getElementById("numero");
            let cantidadComprada = elementoCantidad.value;

            if (cantidadComprada <= cantidadDisponible) {
                elementoRespuesta.textContent = "Compraste " + cantidadComprada
                + " hay disponble aun " + 
                (cantidadDisponible - 
                    parseInt(cantidadComprada)).toS}}
