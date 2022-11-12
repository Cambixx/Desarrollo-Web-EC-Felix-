const URL_DESTINO = "http://localhost:5500/WsJavaScript/0000pruebas/"
const RECURSO1 = "tamaños.json"
const RECURSO2 = "ingredientes.json"


    function crearTitulo(texto){
        var elemento = document.createElement("h2")
        var text = document.createTextNode(texto)
        elemento.appendChild(text)
        formulario.appendChild(elemento)
    }
    function crearRadio(precio, texto){
        let radioA= document.createElement("input")
        let prec = document.createAttribute("value")
        radioA.type="radio"
        radioA.name= "tamaño"
        
        prec.value=precio
        radioA.setAttributeNode(prec)
        formulario.appendChild(radioA)

        let etiqueta = document.createElement('label')
        let contenido = document.createTextNode(texto)
        etiqueta.appendChild(contenido)
        formulario.appendChild(etiqueta)
        let espacio = document.createElement("br")
        formulario.appendChild(espacio)
        
    }

    function crearCheckbox(ingrediente, texto, contenido){
        var check = document.createElement("input")
        var valor = document.createAttribute("value")
        check.type="checkbox"
        check.name=ingrediente
        valor.value=texto
        check.setAttributeNode(valor)
        formulario.appendChild(check)

        
        var etiqueta = document.createElement('label')
        var contenido = document.createTextNode(contenido)
        etiqueta.appendChild(contenido)
        formulario.appendChild(etiqueta)
        var espacio=document.createElement("br")
        formulario.appendChild(espacio)
        
       
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
            
            crearCheckbox( i.INGREDIENTE ,i.PRECIO, i.INGREDIENTE+" "+i.PRECIO)
            let bot = document.getElementById("ingre")
            bot.setAttribute("disabled", "")
            
        }
        resultadoBusqueda2.innerHTML = table
    }
 



    window.onload=function(){
       
        
        tam.onclick=peticionTamaños
        ingre.onclick=peticionIngredientes

        
    }

    
    

    















