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
    for(var i=0; i<ingredientes.length; i++) {
        if(ingredientes[i].checked) {
            marcado = true;
            break;
        }
    }

    if (!marcado) {
        alert('[ERROR] Debes elegir al menos 1 ingrediente');
        return false;
    } 

    alert("Pedimos la pizza!")
    return true;
}

window.onload = function(){
    formulario.onsubmit = validacion;
}