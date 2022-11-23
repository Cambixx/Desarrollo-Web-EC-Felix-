/* Cargar el JSON */

const URL_DESTINO = "http://localhost:5500/AI_2/Requerimiento_1/"
const RECURSO = "menu.json"



function peticionDatos(){
    /* Creamos el objeto "XMLHttpRequest" para hacer la petición AJAX */
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
    xmlHttp.send() 

    /* En la misma llamada, nos traeremos los tamaños y los ingredientes */
    xmlHttp.onload = function(){
        cargarTamanos(this.responseText)
        cargarIngredientes(this.responseText)
    }

    xmlHttp.onerror = function(){
        alert("ERROR!!")
    }

}

/* Declaramos 2 variables para seleccionar los elementos que tienen las clases indicadas, dentro de ellos crearemos con DOM el resto de elementos. */
let tamanos = document.querySelector('.tamanos-pizzas');
let ingredientes = document.querySelector('.ingredientes-pizza');

/* Empezaremos creando un H2 para separar ambas listas: Tamaños e Ingredientes*/
function creaH2(e, titulo) {
    let h1 = document.createElement('h2')
    h1.textContent = titulo
    e.appendChild(h1)
}

/* Crearemos también un salto para controlar el espacio entre elementos */
function creaSalto(e) {
    let salto = document.createElement('br')
    e.appendChild(salto)
}

/* Crearemos los label, tendrán un nombre, una clase y un id para poder modificarlos por estilos y relacinarlos con los input  */
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

/* Crearemos mediante el DOM, el mensaje de error cuando se quiere mandar el formulario pero no está relleno el campo */
function creaMensaje(e, id) {
    let span = document.createElement('span')
    let clase = document.createAttribute('class')
    clase.value = "mensaje-error"
    span.id = id
    span.setAttributeNode(clase)
    e.appendChild(span)
}

/* Crearemos los radio buttons con nombre, id y valor, el texto lo utilizaremos para crear el label que va con el radio.
    Además de lo que habia en el requerimiento 1, aquí hemos recogido también el precio para despues calcular el total */
function creaRadioButton(e, name, texto, id, valor, precio) {
    let radioB = document.createElement('input')
    let fvalue = document.createAttribute('value')
    radioB.type = 'radio'
    radioB.name = name
    radioB.id = id
    fvalue.value = valor

    radioB.dataset.precio = precio
    radioB.setAttributeNode(fvalue)
    e.appendChild(radioB)
    creaLabel(e, texto, id)
}

/* Muy parecido al anterior
    Además de lo que habia en el requerimiento 1, aquí hemos recogido también el precio para despues calcular el total */ 
function creaCheck(e, name, texto, id, valor, precio) {
    let checkB = document.createElement('input')
    let fvalue = document.createAttribute('value')
    checkB.type = 'checkbox'
    checkB.name = name
    checkB.id = id
    fvalue.value = valor

    checkB.dataset.precio = precio
    checkB.setAttributeNode(fvalue)
    e.appendChild(checkB)
    creaLabel(e, texto, id)
}

/* Con esta función llamaremos a nuestro archivo JSON para traer los datos de los tamaños  */
function cargarTamanos(jsonDoc) {
   //Convertimos un texto a un objeto JSON
    var objetoJson = JSON.parse(jsonDoc)
    
    /* Aquí llamamos a los Tamaños de las pizzas */
    var arrayTamanos = objetoJson.CATALOG.TAMANOS;
    console.log(arrayTamanos[0].ID)

    /* Creamos el H2 */
    creaH2(tamanos, 'Tamaño pizza:')

    /* Con un for recorremos los tamaños y creamos un radio button para cada uno. 
    En este requerimiento hemos incluido el precio */
    for (let i of arrayTamanos) {
        creaRadioButton(tamanos, i.NAME, i.TITULO, i.ID, i.VALOR, i.PRECIO)
    }

    /* Creamos el span para mostrar el mensaje */
    creaMensaje(tamanos, "mensajeTamano")
}

function cargarIngredientes(jsonDoc) {
    //Convertimos un texto a un objeto JSON
    var objetoJson = JSON.parse(jsonDoc)
    console.log(objetoJson)

    /* Aquí llamamos a los Ingredientes de las pizzas */
    var arrayIngred = objetoJson.CATALOG.INGREDIENTES;

    /* Creamos el H2 */
    creaH2(ingredientes, 'Ingredientes:')

    /* Con un for recorremos los ingredientes y creamos un radio button para cada uno.
    En este requerimiento hemos incluido el precio */
    for (let i of arrayIngred) {
        creaCheck(ingredientes, i.NAME, i.TITULO, i.ID, i.VALOR, i.PRECIO)
    }

    /* Creamos el span para mostrar el mensaje */
    creaMensaje(ingredientes, "mensajeIngredientes")
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
    En la valiable "tamano" pasará a almacenar el valor del input seleccionado y saldrá del bucle de ejecución. */   
    let tamano = document.getElementsByName("tamano");

    /* Declaramos otra variable llamada "seleccionado" que utilizaremos en otro bucle para validar que el campo está relleno. De momento estará a "false".  */
    let seleccionado = false;

    /* Declaramos una variable llamada "precioTamano" para almacenar el precio y la iniciamos a 0 */
    let precioTamano = 0

    /* Después utilizamos un bucle "for" para recorrer la lista de tamaños y averiguar cual ha sido seleccionado, de eso se encargará el checked. */
    for (var i = 0; i < tamano.length; i++) {
        if (tamano[i].checked) {
            /* Si encuentra uno que ha sido seleccionado, la variable "seleccionado" pasará a ser "true".  */
            seleccionado = true;
            
            /* Aquí almaceno en "precioTamano" el precio del elemento seleccionado */
            precioTamano = precioTamano + parseFloat(tamano[i].dataset.precio)
            tamano = tamano[i].value

            /* En caso de no encontrar ningún elemento seleccionado también saldrá del bucle, y pasará a la validación del campo (Ver más abajo)  */
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
       Cuando se haya recorrido la lista, saldrá del bucle.*/
    let ingredientes = document.getElementsByName("ingredientes");

    /* Declaramos otra variable llamada "marcado" que utilizaremos en otro bucle para validar que el campo está relleno. De momento estará a "false".  */
    let marcado = false;
    
    /* Esta vez, incluiremos una variable "precioIngredientes" para ir sumando el precio de cada ingrediente que se haya seleccionado, lo utilizaremos después para 
    calcular el precio de la pizza. Lo iniciamos a 0. */
    let precioIngredientes = 0

    /* Declaramos un array para incluir el valor del input que encontremos seleccionado y así poder mostrarle al usuario, qué ingredientes lleva su pizza. */
    let totalIngredientes = []

    for (var i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            /* Si encuentra uno que ha sido seleccionado, la variable "seleccionado" pasará a ser "true".  */
            marcado = true;

            /* Aquí almaceno en "precioIngredientes" el precio del elemento seleccionado */
            precioIngredientes = precioIngredientes + parseFloat(ingredientes[i].dataset.precio)

            /* Y lo voy añadiendo al array para luego mostrarlo */
            totalIngredientes.push(ingredientes[i].value)
        }
        
    }

    /* Igual que antes, si "marcado" es "false" nos mostrará el mensaje de que debemos elegir al menos un ingradiente durante unos segundos. 
    Si marcado ha cambiado a "true" seguirá adelante en su ejecución. */
    if (!marcado) {
        let mensaje = document.getElementById('mensajeIngredientes')
        mensaje.textContent = 'Debes elegir al menos 1 ingrediente'

        setTimeout(function () {
            mensaje.textContent = ''
        }, 2500)

        return false;
    }

    /* Declaramos la variable "precioTotal" que recibirá la suma de lo almacenado en las variables "precioTamano" y "precioIngredientes". */
    var precioTotal = precioTamano + precioIngredientes

    /* Para terminar, nuestra función devolverá en un alert el siguiente mensaje, donde además de usar el nombre de el cliente almacenado en "nCliente", 
    mostraremos el tamaño de pizza elegido, los ingredientes seleccioandos y el precio total del pedido. */

    alert("¡Gracias " + nCliente + " por realizar un pedido!" + "\n\nHas seleccionado: " + "\n- Tamaño de pizza: " + tamano + "\n- Ingredientes: " + totalIngredientes + "\n\nPrecio Total: " + precioTotal + "€")
    
    return true;

}

/* Creamos un variable para recoger el id del botón de actualizar la página */
let actualizar = document.getElementById('btnActualizar');

/*Si se hace click en el botón, recargará la página */
actualizar.addEventListener('click', _ =>{
    location.reload();
})

/* Llamamos a nuestra función para cargar los datos de los Tamaños y los Ingredientes*/
peticionDatos()

/* Validamos el formulario. Si la función "validacion" devuelve "true", se manda la información */
formulario.onsubmit = validacion;





