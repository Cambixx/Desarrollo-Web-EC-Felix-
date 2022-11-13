const URL_DESTINO = "http://localhost:5500/AI_2/Requerimiento_1/Sergio/"
const RECURSO1 = "tamaños.json"
const RECURSO2 = "ingredientes.json"


    function crearTitulo(texto){
        var elemento = document.createElement("h2")
        var text = document.createTextNode(texto)
        elemento.appendChild(text)
        formulario1.appendChild(elemento)
    }
    function crearRadio(precio, texto){
        let radioA= document.createElement("input")
        let prec = document.createAttribute("value")
        radioA.type="radio"
        radioA.name= "tamaño"
        
        prec.value=precio
        radioA.setAttributeNode(prec)
        formulario1.appendChild(radioA)

        let etiqueta = document.createElement('label')
        let contenido = document.createTextNode(texto)
        etiqueta.appendChild(contenido)
        formulario1.appendChild(etiqueta)
        let espacio = document.createElement("br")
        formulario1.appendChild(espacio)
        
    }

    function crearCheckbox( texto, contenido, ident, precio){
        var check = document.createElement("input")
        var valor = document.createAttribute("value")
        check.type="checkbox"
        check.name="ingredientes"
        check.id=ident
        valor.value=texto
        check.setAttributeNode(valor)
        formulario1.appendChild(check)

        check.dataset.precio = precio
        var etiqueta = document.createElement('label')
        var contenido = document.createTextNode(contenido)
        etiqueta.appendChild(contenido)
        formulario1.appendChild(etiqueta)
        var espacio=document.createElement("br")
        formulario1.appendChild(espacio)
        
       
    }

    function peticionTamaños() {

        let xmlHttp = new XMLHttpRequest()

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    procesarRespuestaTamaños(this.responseText)
                    
                } else {
                    alert("ZASCA!")
                }
            }
        }

        xmlHttp.open('GET', URL_DESTINO + RECURSO1, true)
        xmlHttp.send(null)
    }

    function peticionIngredientes() {

        let xmlHttp = new XMLHttpRequest()

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    procesarRespuestaIngredientes(this.responseText)                    
                } else {
                    alert("ZASCA!")
                }
            }
        }

        xmlHttp.open('GET', URL_DESTINO + RECURSO2, true)
        xmlHttp.send(null)
    }



    function procesarRespuestaTamaños(jsonDoc){
        
        var objetoJson = JSON.parse(jsonDoc)
        
        console.log(objetoJson)

        
        var arrayTamanos = objetoJson.PIZZERIA.TAMAÑOS;
        crearTitulo("ESTOS SON NUESTROS TAMAÑOS")
       
        for (let i of arrayTamanos) {
            
            crearRadio( i.PRECIO, i.TAMAÑO +" " +i.PRECIO, i.TAMAÑO)
            let bot = document.getElementById("tam")
            bot.setAttribute("disabled", "")
            
        }
        resultadoBusqueda.innerHTML = table
        
    }
    
    function procesarRespuestaIngredientes(jsonDoc){
        
        var objetoJson = JSON.parse(jsonDoc)
        
        console.log(objetoJson)

        
        var arrayTamanos = objetoJson.PIZZA.INGREDIENTES;
        crearTitulo("ESTOS SON NUESTROS INGREDIENTES")
        
        for (let i of arrayTamanos) {
            
            crearCheckbox( i.PRECIO, i.INGREDIENTE+" "+i.PRECIO, i.INGREDIENTE, i.PRECIO)
            let bot = document.getElementById("ingre")
            bot.setAttribute("disabled", "")
            
        }
        resultadoBusqueda2.innerHTML = table
    }
 

    function validacion(){
        
        if (nombre.value.trim()=="") {
            alert("DEBES RELLENAR EL NOMBRE")
            return false;
        }

        if (apellido.value.trim()=="") {
            alert("DEBES RELLENAR EL APELLIDO ")
            return false;
        }

        if (direccion.value.trim()=="") {
            alert("DEBES RELLENAR LA DIRECCION ")
            return false;
        }
        if (telefono.value.trim()=="") {
            alert("DEBES RELLENAR EL TELEFONO ")
            return false;
        }
        if (email.value.trim()=="") {
            alert("DEBES RELLENAR EL MAIL ")
            return false;
        }

        var radios = document.getElementsByName("tamaño")
        var seleccionado= false;
        var precioTamaño= 0
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                seleccionado=true
                precioTamaño=parseInt(radios[i].value)              
                break;
            }
            
        }

        if (!seleccionado) {
            
            alert("SELECCIONA UN TAMAÑO")
            return false
        }

        var checks = document.getElementsByName("ingredientes")
        var seleccion=false
        let precioIngredientes=0
        for (let i = 0; i < checks.length; i++) {
            if (checks[i].checked) {
                seleccion=true
                precioIngredientes = precioIngredientes + parseInt(checks[i].dataset.precio)
            }
            
        }

        if (!seleccion) {
            alert("DEBES SELECCIONAR AL MENOS UN INGREDIENTE")
            return false
        }

        

        var precioTotal = precioIngredientes + precioTamaño
        alert("PRECIO TOTAL " + "\n\ " + precioTotal + " \n\ "+ " GRACIAS REALIZAR SU PEDIDO")
        return true

        
    }

    

    window.onload=function(){
       
        
        tam.onclick=peticionTamaños
        ingre.onclick=peticionIngredientes
        formulario1.onsubmit=validacion
        
    }

    
    

    















