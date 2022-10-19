

function validacion() {
    console.log("Validando los datos del formulario...")

    let nCliente
    if (nombre.value == "") {
        let mensaje = document.getElementById('mensajeNombre')
        mensaje.textContent = 'El campo debe estar relleno'

        setTimeout( function(){
            mensaje.textContent = ''
        }, 2500)
        return false;
    }else nCliente = nombre.value

    if (direccion.value == "") {
        let mensaje = document.getElementById('mensajeDireccion')
        mensaje.textContent = 'El campo debe estar relleno'

        setTimeout( function(){
            mensaje.textContent = ''
        }, 2500)
        return false;
    }

    if (telefono.value == "") {
        let mensaje = document.getElementById('mensajeTelefono')
        mensaje.textContent = 'El campo debe estar relleno'

        setTimeout( function(){
            mensaje.textContent = ''
        }, 2500)
        return false;
    }

    if (email.value == "") {
        let mensaje = document.getElementById('mensajeEmail')
        mensaje.textContent = 'El campo debe estar relleno'

        setTimeout( function(){
            mensaje.textContent = ''
        }, 2500)
        return false;
    }
    
    let tamano = document.getElementsByName("tamano");
    var seleccionado = false;
    for(var i=0; i<tamano.length; i++) {
        if(tamano[i].checked) {
            seleccionado = true;
            tamano = tamano[i].value
            break;
        }
    }

    if(!seleccionado) {
        let mensaje = document.getElementById('mensajeTamano')
        mensaje.textContent = 'Debe seleccionar un tamaño de pizza'

        setTimeout( function(){
            mensaje.textContent = ''
        }, 2500)
        return false;
    }

    ingredientes = document.getElementsByName("ingredientes");
    var marcado = false;
    var precioIngredientes = 0
    totalIngredientes = []
    for(var i=0; i<ingredientes.length; i++) {
        while(ingredientes[i].checked) {
            marcado = true;
            precioIngredientes ++
            totalIngredientes.push(ingredientes[i].value)
            break;
        }
    }

    if (!marcado) {
        let mensaje = document.getElementById('mensajeIngredientes')
        mensaje.textContent = 'Debes elegir al menos 1 ingrediente'

        setTimeout( function(){
            mensaje.textContent = ''
        }, 2500)
        return false;
    } 

    // Calcular precio

    var precioTamano = 0

    if(document.getElementById("tamaño_pequeña").checked){
        precioTamano=5
    }else if (document.getElementById("tamaño_mediana").checked){
        precioTamano=10
    }else if (document.getElementById("tamaño_grande").checked){
       precioTamano=15 
    }

    var precio = precioTamano + precioIngredientes

    // Mostrar mensaje
    
    alert("Gracias!! "+ nCliente +"\n Tu pedido: " + "\n Pizza: " + tamano + "\n Ingredientes: " + totalIngredientes + "\n Total: " + precio + "€")
    return true;
}

window.onload = function(){
    formulario.onsubmit = validacion;
}