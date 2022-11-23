/* Cargar el JSON indicando donde está localizado y cómo se llama*/

const URL_DESTINO = "http://localhost:5500/AI_2/Requerimiento_1/"
const RECURSO = "menu.json"


/* Con esta función haremos una llamada a los datos de nuestro archivo JSON */
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

/* Crearemos los radio buttons con nombre, id y valor, el texto lo utilizaremos para crear el label que va con el radio */
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

/* Muy parecido al anterior */ 
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

/* Con esta función llamaremos a nuestro archivo JSON para traer los datos de los tamaños  */
function cargarTamanos(jsonDoc) {
   //Convertimos un texto a un objeto JSON
    var objetoJson = JSON.parse(jsonDoc)
    console.log(objetoJson)

    /* Aquí llamamos a los Tamaños de las pizzas */
    var arrayTamanos = objetoJson.CATALOG.TAMANOS;

    /* Creamos el H2 */
    creaH2(tamanos, 'Tamaño pizza:')

    /* Con un for recorremos los tamaños y creamos un radio button para cada uno */
    for (let i of arrayTamanos) {
        creaRadioButton(tamanos, i.NAME, i.TITULO, i.ID, i.VALOR)
    }

    /* Creamos el span para mostrar el mensaje */
    creaMensaje(tamanos, "mensajeTamano")
}

/* Con esta función llamaremos a nuestro archivo JSON para traer los datos de los ingredientes  */
function cargarIngredientes(jsonDoc) {
    //Convertimos un texto a un objeto JSON
    var objetoJson = JSON.parse(jsonDoc)
    console.log(objetoJson)

    /* Aquí llamamos a los Ingredientes de las pizzas */
    var arrayIngred = objetoJson.CATALOG.INGREDIENTES;

    /* Creamos el H2 */
    creaH2(ingredientes, 'Ingredientes:')

    /* Con un for recorremos los ingredientes y creamos un radio button para cada uno */
    for (let i of arrayIngred) {
        creaCheck(ingredientes, i.NAME, i.TITULO, i.ID, i.VALOR)
    }

    /* Creamos el span para mostrar el mensaje */
    creaMensaje(ingredientes, "mensajeIngredientes")
}

/* Creamos un variable para recoger el id del botón de actualizar la página */
let actualizar = document.getElementById('btnActualizar');

/*Si se hace click en el botón, recargará la página */
actualizar.addEventListener('click', _ =>{
    location.reload();
})

/* Llamamos a nuestra función para cargar los datos de los Tamaños y los Ingredientes*/
peticionDatos()







