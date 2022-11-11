const URL_DESTINO = "http://localhost:5500/0000pruebas/"
const RECURSO1 = "tamaños.json"
const RECURSO2 = "ingredientes.json"


    
    function crearRadio(texto){
        var radioA= document.createElement("input")
        radioA.type="radio"
        radioA.name= "tamaño"
        formulario.appendChild(radioA)
        var etiqueta = document.createElement('label')
        var contenido = document.createTextNode(texto)
        etiqueta.appendChild(contenido)
        formulario.appendChild(etiqueta)
        var espacio = document.createElement("br")
        formulario.appendChild(espacio)
        
    }

    function crearCheckbox(ingrediente, texto){
        var check = document.createElement("input")
        check.type="checkbox"
        check.name=ingrediente
        formulario.appendChild(check)
        var etiqueta = document.createElement('label')
        var contenido = document.createTextNode(texto)
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
                    procesarRespuestaTamaños(this.responseText)//Obtenemos el valor en texto
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
                    procesarRespuestaIngredientes(this.responseText)//Obtenemos el valor en texto
                } else {
                    alert("ZASCA!")
                }
            }
        }

        xmlHttp.open('GET', URL_DESTINO + RECURSO2, true)
        xmlHttp.send(null)
    }



    function procesarRespuestaTamaños(jsonDoc){
        //Convertimos un texto a un objeto JSON
        var objetoJson = JSON.parse(jsonDoc)
        //Podemos hacer lo contrario con "JSON.stringify(obj)"
        console.log(objetoJson)

        //Lo suyo seria crear objetos con el DOM, esto esta regulín
        //pero como ejemplo sencillo vale
        //crearRadio("Grande")
        var arrayTamanos = objetoJson.PIZZERIA.TAMAÑOS;//Ojo mayusculas y minusculas, es como este en el json original
        
        //Iteramos el array de CDs y formamos las filas y columnas
        for (let i of arrayTamanos) {
            
            crearRadio( i.TAMAÑO +" " +i.PRECIO)
            let bot = document.getElementById("tam")
            bot.setAttribute("disabled", "")
            
        }
        resultadoBusqueda.innerHTML = table
    }
    
    function procesarRespuestaIngredientes(jsonDoc){
        //Convertimos un texto a un objeto JSON
        var objetoJson = JSON.parse(jsonDoc)
        //Podemos hacer lo contrario con "JSON.stringify(obj)"
        console.log(objetoJson)

        //Lo suyo seria crear objetos con el DOM, esto esta regulín
        //pero como ejemplo sencillo vale
        //crearRadio("Grande")
        var arrayTamanos = objetoJson.PIZZA.INGREDIENTES;//Ojo mayusculas y minusculas, es como este en el json original
        
        //Iteramos el array de CDs y formamos las filas y columnas
        for (let i of arrayTamanos) {
            
            crearCheckbox("INGREDIENTE", i.INGREDIENTE +" " +i.PRECIO)
            let bot = document.getElementById("ingre")
            bot.setAttribute("disabled", "")
            
        }
        resultadoBusqueda2.innerHTML = table
    }





    window.onload=function(){
       
        
        tam.onclick=peticionTamaños
        ingre.onclick=peticionIngredientes
    }

    
    

    















