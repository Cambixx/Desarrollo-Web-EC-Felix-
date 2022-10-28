let contenedor = document.querySelector('.contenedor');
let formulario = document.createElement('form')
contenedor.append(formulario)
meterInputs()

enunciados(formulario, '¿CUAL ES TU COLOR FAVORITO?')
meterRadio()

enunciados(formulario, '¿CUAL ES TU PELÍCULA FAVORITA?')
meterRadio2()

enunciados(formulario, 'SELECCIONA QUE ANIMALES TE GUSTAN MÁS')
meterCheck()

enunciados(formulario, 'IMAGEN 1')
imagenes(formulario, 'https://as01.epimg.net/meristation/imagenes/2021/10/06/noticias/1633514535_199538_1633514571_noticia_normal.jpg' )

enunciados(formulario, 'IMAGEN 2')
imagenes(formulario, 'https://pics.filmaffinity.com/digimon_adventure-763330122-large.jpg')

enunciados(formulario, 'SELECCIONA UN COLOR')
let opciones= ['azul', 'rojo', 'verde', 'gris', 'rosa', 'violeta', 'negro']
crearSelect(formulario, opciones)

enunciados(formulario, 'ESCRÍBENOS ALGO')
crearTexto(formulario)


function espacios(v){
    let espacio = document.createElement('br')
    v.appendChild(espacio)

}
function labelInput(v, texto){
    let etiqueta = document.createElement('label')
    let campo = document.createElement('input')
    espacios(v)
    let contenido = document.createTextNode(texto)
    etiqueta.appendChild(contenido)
    v.appendChild(etiqueta)
    v.appendChild(campo)
    

}

function enunciados(v, texto){
    let nombre = document.createElement('h2')
    let text = document.createTextNode(texto)
    nombre.appendChild(text)
    v.appendChild(nombre)
}

function labels(v, texto){
    
    let etiqueta = document.createElement('label')
    let contenido = document.createTextNode(texto)
    etiqueta.appendChild(contenido)
    v.appendChild(etiqueta)
    
}

function creaRadio (  v , name , texto   ){
    
    let radio = document.createElement('input')
    radio.type= 'radio'
    radio.name=name
    v.appendChild(radio)
    labels(v,texto)
    espacios(v)

}

function creaRadio2 (  v , name , texto   ){
   
    let radio = document.createElement('input')
    radio.type= 'radio'
    radio.name=name
    v.appendChild(radio)
    labels(v,texto)
    espacios(v)
}

function meterInputs(){
    labelInput(formulario, 'DNI')
    labelInput(formulario, 'nombre')
    labelInput(formulario, 'direccion')
    labelInput(formulario, 'fecha')
}

function meterRadio(){
    creaRadio(formulario, 'comida', 'pizza')
    creaRadio(formulario, 'comida', 'burger')
    creaRadio(formulario, 'comida', 'pasta')
    creaRadio(formulario, 'comida', 'queso')
}

function meterRadio2(){
    creaRadio2(formulario, 'pelicula', 'Interestellar')
    creaRadio2(formulario, 'pelicula', 'Pulp fiction')
    creaRadio2(formulario, 'pelicula', 'El caballero Oscuro')
    creaRadio2(formulario, 'pelicula', 'Origen')
}

function crearCheck(v, texto){
    let check = document.createElement('input')
    check.type= 'checkbox'
    v.appendChild(check)
    labels(v,texto)
    espacios(v)
}

function meterCheck(){
    crearCheck(formulario, 'jabalí')
    crearCheck(formulario, 'koala')
    crearCheck(formulario, 'gremlin')
    crearCheck(formulario, 'mapache')
    crearCheck(formulario, 'oruga')

}

function imagenes(v, texto){
    
    let imagen= document.createElement('img')
    imagen.src= texto
    v.appendChild(imagen)
}

function crearSelect(v, opciones){

    let selec = document.createElement('select')
    for (let index = 0; index < opciones.length ; index++) {
        let opcion = document.createElement('option')
        opcion.textContent=opciones[index]
        selec.appendChild(opcion)      
    }
    v.appendChild(selec)
}

function crearTexto(v){
    let area = document.createElement('textarea')
    v.appendChild(area)
}