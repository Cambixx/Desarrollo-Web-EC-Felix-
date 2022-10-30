function validar(){

    

    if (nombre.value.trim() == "") {
        alert('DEBES RELLENAR EL CAMPO NOMBRE')
        return false;
    }
    if (direccion.value.trim() == "") {
        alert('DEBES RELLENAR EL CAMPO DIRECCION')
        return false;
    }
    if (telefono.value.trim() == "") {
        alert('DEBES RELLENAR EL CAMPO TELEFONO')
        return false;
    }
    if (email.value.trim() == "") {
        alert('DEBES RELLENAR EL CAMPO EMAIL')
        return false;
    }

    tamaño = document.getElementsByName("tamaño");
    var corroborar =false;
    for (var index = 0; index < tamaño.length; index++) {
        if (tamaño[index].checked) {
            corroborar= true;
            break;
        }
        
    }

    if (!corroborar) {
        alert("DEBES SELECCIONAR  UN TAMAÑO")
        return false;
    }

    ingredientes = document.getElementsByName("ingrediente")
    var corroborar= false;
    var precioIngredientes=0;
    
    for (let index = 0; index < ingredientes.length; index++) {
        while (ingredientes[index].checked) {           
            precioIngredientes++;
            corroborar=true;
            break;
        }
        
    }

    if (!corroborar) {
        alert("DEBES SELECCIONAR AL MENOS UN INGREDIENTE")
        return false;
    }
    
    var precio=0;
    var ingrediente=0;
    if (document.getElementById("grande").checked) {
        precio=15;
    }else if (document.getElementById("mediana").checked) {
        precio=10;
    }else if(document.getElementById("pequeña").checked){
        precio=5;
    }

    var precioTotal = precio + precioIngredientes; 
    alert("El precio de tu pizza es " + precioTotal);
    return true;



}



window.onload =function(){
    formulario.onsubmit= validar;
}