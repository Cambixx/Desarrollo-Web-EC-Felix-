/* Cargar el JSON */

const URL_DESTINO = "http://localhost:5500/AI_2/Requerimiento_1/Lidia/"
const RECURSO = "menu.json"


window.onload = function () {
    /* Creamos el objeto "XMLHttpRequest" para hacer la petición AJAX */
    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                /* Convierto el objeto a XML */
                cargarTamanos(this.responseText)
                cargarIngredientes(this.responseText)
            } else {
                alert("ZASCA!")
            }
        }
    }

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
    xmlHttp.send(null)

    let tamanos = document.querySelector('.tamanos-pizzas');
    let ingredientes = document.querySelector('.ingredientes-pizza');

    function creaH2(e, titulo) {
        let h1 = document.createElement('h2')
        h1.textContent = titulo
        e.appendChild(h1)
    }

    function creaSalto(e) {
        let salto = document.createElement('br')
        e.appendChild(salto)
    }

    function creaLabel(e, etiqueta, id) {
        let label = document.createElement('label')
        let clase = document.createAttribute('class')
        let forid = document.createAttribute('for')
        clase.value = "label"
        forid.value = id
        label.setAttributeNode(clase)
        label.setAttributeNode(forid)
        label.textContent = etiqueta
        e.appendChild(label)
        creaSalto(e)
    }

    function creaRadioButton(e, name, texto, id, valor) {
        let radioB = document.createElement('input')
        let fvalue = document.createAttribute('value')
        radioB.type = 'radio'
        radioB.name = name
        radioB.id = id
        fvalue.value = valor
        radioB.setAttributeNode(fvalue)
        e.appendChild(radioB)
        creaLabel(e, texto, id)
    }

    function creaCheck(e, name, texto, id, valor) {
        let checkB = document.createElement('input')
        let fvalue = document.createAttribute('value')
        checkB.type = 'checkbox'
        checkB.name = name
        checkB.id = id
        fvalue.value = valor
        checkB.setAttributeNode(fvalue)
        e.appendChild(checkB)
        creaLabel(e, texto, id)
    }

    function cargarTamanos(jsonDoc) {
        //Convertimos un texto a un objeto JSON
        var objetoJson = JSON.parse(jsonDoc)
        console.log(objetoJson)
        var arrayTamanos = objetoJson.CATALOG.TAMANOS;

        creaH2(tamanos, 'Tamaño pizza:')

        //Iteramos el array de CDs y formamos las filas y columnas
        for (let i of arrayTamanos) {
            creaRadioButton(tamanos, i.NAME, i.TITULO, i.ID, i.VALOR)
        }

        //resultadoBusqueda.innerHTML = tamanos;
    }

    function cargarIngredientes(jsonDoc) {
        //Convertimos un texto a un objeto JSON
        var objetoJson = JSON.parse(jsonDoc)
        console.log(objetoJson)
        var arrayIngred = objetoJson.CATALOG.INGREDIENTES;

        creaH2(ingredientes, 'Ingredientes:')

        //Iteramos el array de CDs y formamos las filas y columnas
        for (let i of arrayIngred) {
            creaCheck(ingredientes, i.NAME, i.TITULO, i.ID, i.VALOR)
        }
        //resultadoBusqueda.innerHTML = ingredientes;
    }


    /* Creamos una función para validar todos los datos del formulario antes de mandarlo */

    function validacion() {
        /* Declaramos una variable "nCliente" para almacenar el nombre que nos pase y luego poder personalizar el mensaje que mostraremos al mandar el formulario. */
        let nCliente
        /* Con este "if" comprobaremos que el usuario haya escrito algo en el input cuyo "id" se corresponde con "nombre".
           Si la casilla está vacia, mostrará un mensaje en el elemento cuyo "id" es "mensajeNombre", indicando que debe rellenar el campo */
        if (nombre.value == "") {
            let mensaje = document.getElementById('mensajeNombre')
            mensaje.textContent = 'Debes rellenar el nombre'
            /* Con "setTimeout" podemos ejecutar un código pasado el tiempo que le indiquemos.
               En este caso le indicamos que vuelva a dejar vacio el campo del mensaje pasados 2 segundos y medio. */
            setTimeout(function () {
                mensaje.textContent = ''
            }, 2500)
            return false;
        } else nCliente = nombre.value /* Si el campo se rellenó, lo da por válido y asigna ese nombre a la variable "nCliente". */

        /* Esta validación se repite en el resto de campos correspondientes a los Datos de Contacto y el mensaje se ha personalizado, dependiendo de cada campo. */
        if (direccion.value == "") {
            let mensaje = document.getElementById('mensajeDireccion')
            mensaje.textContent = 'Debes rellenar la dirección'

            setTimeout(function () {
                mensaje.textContent = ''
            }, 2500)
            return false;
        }

        if (telefono.value == "") {
            let mensaje = document.getElementById('mensajeTelefono')
            mensaje.textContent = 'Debes rellenar el teléfono'

            setTimeout(function () {
                mensaje.textContent = ''
            }, 2500)
            return false;
        }

        if (email.value == "") {
            let mensaje = document.getElementById('mensajeEmail')
            mensaje.textContent = 'Debes rellenar el email'

            setTimeout(function () {
                mensaje.textContent = ''
            }, 2500)
            return false;
        }

        /* Cremos una variable llamada "tamano" donde almacenamos una lista de todos los elementos que contienen el "name": "tamano" gracias a "getElementsByName". 
           Declaramos otra variable llamada "seleccionado" que utilizaremos en otro bucle para validar que el campo está relleno. De momento estará a "false". 
           Después utilizamos un bucle "for" para recorrer la lista de tamaños y averiguar cual ha sido seleccionado, de eso se encargará el checked. 
           Si encuentra uno que ha sido seleccionado, la variable "seleccionado" pasará a ser "true". En la valiable "tamano" pasará a almacenar el valor del input seleccionado
           y saldrá del bucle de ejecución. 
           En caso de no encontrar ningún elemento seleccionado también saldrá del bucle, y pasará a la validación del campo (Ver más abajo) */
        let tamano = document.getElementsByName("tamano");
        var seleccionado = false;
        for (var i = 0; i < tamano.length; i++) {
            if (tamano[i].checked) {
                seleccionado = true;
                tamano = tamano[i].value
                break;
            }
        }

        /* Con este bucle comprobamos (similar a los campos de contacto) si se ha seleccionado alguna opción. En este caso no se comprueba si el campo está vacío, 
           se comprueba si la variable "seleccionado" no es true. Si sigue siendo false, significa que no se ha encontrado en el bucle anterior ninguna opción seleccionado, 
           por lo que mostrará un mensaje, igual que en los anteriores inputs durante unos segundos.*/

        if (!seleccionado) {
            let mensaje = document.getElementById('mensajeTamano')
            mensaje.textContent = 'Debe seleccionar un tamaño de pizza'

            setTimeout(function () {
                mensaje.textContent = ''
            }, 2500)
            return false;
        }

        /* De la misma manera que con el tamaño de la pizza, se comprueba cuantos ingredientes se han seleccionado. 
           Esta vez, incluiremos una variable "precioIngredientes" para ir sumando uno por cada ingrediente que se haya seleccionado, lo utilizaremos después para calcular
           el precio de la pizza. 
           También crearemos un array para incluir el valor del input que encontremos seleccionado y así poder mostrarle al usuario, qué ingredientes lleva su pizza. 
           Cuando se haya recorrido la lista, saldrá del bucle.*/

        ingredientes = document.getElementsByName("ingredientes");
        var marcado = false;
        var precioIngredientes = 0
        totalIngredientes = []
        for (var i = 0; i < ingredientes.length; i++) {
            while (ingredientes[i].checked) {
                marcado = true;
                precioIngredientes++
                totalIngredientes.push(ingredientes[i].value)
                break;
            }
        }

        /* Igual que antes, si "marcado" es "false" nos mostrará el mensaje de que debemos elegir al menos un ingradiente durante unos segundos. Si marcado ha cambiado a "true"
        seguirá adelante en su ejecución. */

        if (!marcado) {
            let mensaje = document.getElementById('mensajeIngredientes')
            mensaje.textContent = 'Debes elegir al menos 1 ingrediente'

            setTimeout(function () {
                mensaje.textContent = ''
            }, 2500)
            return false;
        }

        /* Aquí empezamos a calcular el precio del pedido dependiento de las opciones elegidas. */

        /* Declaramos la variable "precioTamano" y la iniciamos a 0. A continuación, con un bucle recogeremos la opción que ha sido seleccionada para asignarle a la variable el precio,
           dependiendo del tamaño*/

        var precioTamano = 0

        if (document.getElementById("tamaño_pequeña").checked) {
            precioTamano = 5
        } else if (document.getElementById("tamaño_mediana").checked) {
            precioTamano = 10
        } else if (document.getElementById("tamaño_grande").checked) {
            precioTamano = 15
        }

        /* Declaramos la variable "precio" que recibirá la suma de lo almacenado en las variables "precioTamano" y "precioIngredientes". */
        var precio = precioTamano + precioIngredientes

        /* Para terminar, nuestra función devolverá en un alert el siguiente mensaje, donde además de usar el nombre de el cliente almacenado en "nCliente", mostraremos el tamaño de
           pizza elegido, los ingredientes seleccioandos y el precio total del pedido. */

        alert("¡Gracias " + nCliente + " por realizar un pedido!" + "\n\nHas seleccionado: " + "\n- Tamaño de pizza: " + tamano + "\n- Ingredientes: " + totalIngredientes + "\n\nPrecio Total: " + precio + "€")
        return true;
    }


    /* Si la función "validacion" devuelve "true", se manda la información */
    formulario.onsubmit = validacion;
}
