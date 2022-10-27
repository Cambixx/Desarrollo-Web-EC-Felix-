function validacion() {
    console.log("Validando los datos del formulario...")

    if (nombre.value.trim() == "") {
        alert('[ERROR] El campo Nombre debe de estar relleno');
        return false;
    }

    if (direccion.value.trim() == "") {
        alert('[ERROR] El campo Dirección debe de estar relleno');
        return false;
    }

    if (telefono.value.trim() == "") {
        alert('[ERROR] El campo Teléfono debe de estar relleno');
        return false;
    }

    if (email.value.trim() == "") {
        alert('[ERROR] El campo Email debe de estar relleno');
        return false;
    }
    
    tamano = document.getElementsByName("tamano");
    var seleccionado = false;
    for(var i=0; i<tamano.length; i++) {
        if(tamano[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if(!seleccionado) {
        alert('[ERROR] Debe seleccionar un tamaño de pizza');
        return false;
    }

    ingredientes = document.getElementsByName("ingredientes");
    var marcado = false;
    var precioIngredientes = 0
    for(var i=0; i<ingredientes.length; i++) {
        while(ingredientes[i].checked) {
            marcado = true;
            precioIngredientes ++
            break;
        }
    }

    if (!marcado) {
        alert('[ERROR] Debes elegir al menos 1 ingrediente');
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

    alert("Tu pedido cuesta: " + precio + "€")
    return true;
}

window.onload = function(){
    formulario.onsubmit = validacion;
}