/* Cargar el JSON */

const URL_DESTINO = "http://localhost:5500/AI_2/Requerimiento_1/Lucía/"
const RECURSO = "menu.json"


function peticionDatos(){

    //Creo mi petición AJAX

    //1. Creo mi HTTPRequest
    let xmlHttp = new XMLHttpRequest();

    //2. Hago una petición asíncrona (valor final = true)
    xmlHttp.open('GET', URL_DESTINO + RECURSO, true);

    //3
    xmlHttp.send();
    //4. Establezco las funciones de callback que ejecutaré cuando se procese la respuesta HTTP (load o error)
    xmlHttp.onload = function(){
        cargarTamanos(this.responseText)
        cargarIngredientes(this.responseText)
    }

    xmlHttp.onerror = function(){
        alert("Lo sentimos, algo ha ido mal");
    }

}

//Accedo a los 2 recursos que quiero
let tamanos = document.querySelector('.tamanos-pizzas');
let ingredientes = document.querySelector('.ingredientes-pizza');

//Creo la estructura DOM que ya tenía en la Actividad1
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

function creaMensaje(e, id) {
    let span = document.createElement('span')
    let clase = document.createAttribute('class')
    clase.value = "mensaje-error"
    span.id = id
    span.setAttributeNode(clase)
    e.appendChild(span)
}

// Aqui he agregado un un atributo para el precio 
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
    textoEtiqueta = texto + " (" + precio + "€)";
    creaLabel(e, textoEtiqueta, id)
}

// Aqui he agregado un un atributo para el precio y lo añado a la etiqueta para que lo vea el cliente
function creaCheck(e, name, texto, id, valor, precio) {
    let checkB = document.createElement('input')
    let fvalue = document.createAttribute('value')
    checkB.type = 'checkbox'
    checkB.name = name
    checkB.id = id
    fvalue.value = valor;

    checkB.dataset.precio = precio
    checkB.setAttributeNode(fvalue)
    e.appendChild(checkB)
    textoEtiqueta = texto + " (" + precio + "€)";
    creaLabel(e, textoEtiqueta, id);
}

function cargarTamanos(jsonDoc) {
   
    var objetoJson = JSON.parse(jsonDoc)
    
    var arrayTamanos = objetoJson.CATALOG.TAMANOS;
    console.log(arrayTamanos[0].ID)
    creaH2(tamanos, 'Tamaño pizza:')

    //Aqui he cargado el atributo precio
    for (let i of arrayTamanos) {
        creaRadioButton(tamanos, i.NAME, i.TITULO, i.ID, i.VALOR, i.PRECIO)
    }
    creaMensaje(tamanos, "mensajeTamano")
}

function cargarIngredientes(jsonDoc) {

    var objetoJson = JSON.parse(jsonDoc)
    console.log(objetoJson)
    var arrayIngred = objetoJson.CATALOG.INGREDIENTES;

    creaH2(ingredientes, 'Ingredientes:')

    //Aqui he cargado el atributo precio
    for (let i of arrayIngred) {
        creaCheck(ingredientes, i.NAME, i.TITULO, i.ID, i.VALOR, i.PRECIO)
    }
    creaMensaje(ingredientes, "mensajeIngredientes")
}


//De la otra actividad
function validacion() {

    let nCliente

    if (nombre.value == "") {
        let mensaje = document.getElementById('mensajeNombre')
        mensaje.textContent = 'Debes rellenar el nombre'
      
        setTimeout(function () {
            mensaje.textContent = ''
        }, 2500)
        return false;
    } else nCliente = nombre.value 

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

    let tamano = document.getElementsByName("tamano");
    let seleccionado = false;
    let precioTamano = 0
    for (var i = 0; i < tamano.length; i++) {
        if (tamano[i].checked) {
            seleccionado = true;
            //Aqui sumo el precio del tamaño
            precioTamano = precioTamano + parseFloat(tamano[i].dataset.precio)
            tamano = tamano[i].value
            break;
        }
    }


    if (!seleccionado) {
        let mensaje = document.getElementById('mensajeTamano')
        mensaje.textContent = 'Debe seleccionar un tamaño de pizza'

        setTimeout(function () {
            mensaje.textContent = ''
        }, 2500)
        return false;
    }


    let ingredientes = document.getElementsByName("ingredientes");
    let marcado = false;
    let precioIngredientes = 0
    let totalIngredientes = []
    for (var i = 0; i < ingredientes.length; i++) {
        
        
        if (ingredientes[i].checked) {
            marcado = true;
            //Aqui sumo el precio de los ingredientes
            precioIngredientes = precioIngredientes + parseFloat(ingredientes[i].dataset.precio)
            totalIngredientes.push(ingredientes[i].value)
        }
        
    }


    if (!marcado) {
        let mensaje = document.getElementById('mensajeIngredientes')
        mensaje.textContent = 'Debes elegir al menos 1 ingrediente'

        setTimeout(function () {
            mensaje.textContent = ''
        }, 2500)
        return false;
    }

    var precioTotal = precioTamano + precioIngredientes

    alert("¡Gracias " + nCliente + " por realizar un pedido!" + "\n\nHas seleccionado: " + "\n- Tamaño de pizza: " + tamano + "\n- Ingredientes: " + totalIngredientes + "\n\nPrecio Total: " + precioTotal + "€")
    return true;

}

//Ejecuto la petición AJAX
peticionDatos();

//Valido el formulario antes de decir el precio
formulario.onsubmit = validacion;