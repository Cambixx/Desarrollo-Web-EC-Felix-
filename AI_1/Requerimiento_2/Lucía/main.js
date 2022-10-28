function validarFormulario() {
    console.log("Hola! Estamos validando el formulario");
    
    let validado = true;
    
    //Valido campos de texto
    if (nombre.value.trim() == "") {
        alert('¡ERROR! El campo Nombre no puede estar vacío');
        validado = false;
    
    } else if (direccion.value.trim() == "") {
        alert('¡ERROR! El campo "Dirección" no puede estar vacío');
        validado = false;
    
    } else if (telefono.value.trim() == "") {
        alert('¡ERROR! El campo "Teléfono" no puede estar vacío');
        validado = false;

    } else if (email.value.trim() == "") {
        alert('¡ERROR! El campo "Email" no puede estar vacío');
        validado = false;

    } else{
        console.log("Campos de texto válidos, seguimos");
    }

    //Valido radioButtons
    size = document.getElementsByName("size");
    var seleccionado = false;
    if(validado){
        for(var i=0; i<size.length; i++) {
            if(size[i].checked) {
                seleccionado = true;
                console.log("Tamaño seleccionado, seguimos");
                break;
            }
        }
        if(!seleccionado) {
            alert('[ERROR] Debe seleccionar un tamaño de pizza');
            return false;
        }
    }
    
    //Valido checkbox
    var numIngredientes = 0;

    ingredientes = document.getElementsByName("ingredientes");
    var seleccionado = false;
    for(var i=0; i<ingredientes.length; i++) {
        if(ingredientes[i].checked) {
            seleccionado = true;
            numIngredientes++;
            console.log("Has elegido " + numIngredientes + " ingredientes, seguimos");
            break;
        }
    }

    if (!seleccionado) {
        alert('¡ERROR! Debes añadir mínimo un ingrediente');
        return false;
    } 

    //Calculo el precio
    var precioBase = 0

    if(document.getElementById("size_pequeña").checked){
        precioBase=5
    }else if (document.getElementById("size_mediana").checked){
        precioBase=10
    }else if (document.getElementById("size_grande").checked){
        precioBase=15 
    }

    var precioTotal = precioBase + numIngredientes;

    //Mensaje final con el precio
    alert("¡Pedido completado! El precio a pagar es: " + precio + "€");
    return true;


}

//Llamada a la función desde onload
window.onload = function () {
    formularioPizzeria.onsubmit = validarFormulario;
}

//Intento de hacer todo con funciones
/**

function validarCamposTexto(){

    if (nombre.value.trim() == "") {
        alert('¡ERROR! El campo Nombre no puede estar vacío');
        validado = false;
    
    } else if (direccion.value.trim() == "") {
        alert('¡ERROR! El campo "Dirección" no puede estar vacío');
        validado = false;
    
    } else if (telefono.value.trim() == "") {
        alert('¡ERROR! El campo "Teléfono" no puede estar vacío');
        validado = false;

    } else if (email.value.trim() == "") {
        alert('¡ERROR! El campo "Email" no puede estar vacío');
        validado = false;

    } else{
        console.log("Campos de texto válidos, seguimos");
    }

}

function validarTamaño(){

    size = document.getElementsByName("size");
    for(var i=0; i<size.length; i++) {
        if(size[i].checked) {
            validado = true;
            break;
        }
    }
    
    if (!rellenado) {
        alert('¡Error! Necesitamos saber qué tamaño de pizza quiere');
        validado = false;
    }
}

 
let numIngredientes = 0;

function validarIngredientes(){
    ingredientes = document.getElementsByName("ingredientes");
    for (var i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            numIngredientes++;
            break;
        }
    }

    if (!validado) {
        alert('[ERROR] Debes elegir al menos 1 ingrediente');
        return false;
    }
}

function calcularPrecio(){
    
    var precioTamano = 0

    if (document.getElementById("size_pequeña").checked) {
        precioTamano = 5;
    } else if (document.getElementById("size_mediana").checked) {
        precioTamano = 10;
    } else if (document.getElementById("size_grande").checked) {
        precioTamano = 15;
    }

    var precio = precioTamano + numIngredientes;

    alert("¡Pedido completado! El precio a pagar es: " + precio + "€");
    validado = true;
}

*/