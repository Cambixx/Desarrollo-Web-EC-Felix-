let contenedor = document.querySelector('.contenedor');

let formulario = document.createElement('form')

function creaH1(e, titulo) {
  let h1 = document.createElement('h1')
  let clase = document.createAttribute('class')
  clase.value="titulo";
  h1.setAttributeNode(clase)
  h1.textContent = titulo
  e.appendChild(h1)
}

function creaTitulo(e, texto, id) {
  let titulo = document.createElement('label')
  let clase = document.createAttribute('class')
  let forid = document.createAttribute('for')
  clase.value="subtitulo";
  forid.value=id
  titulo.setAttributeNode(clase)
  titulo.setAttributeNode(forid)
  titulo.textContent = texto
  e.appendChild(titulo)
}

function creaLabel(e, etiqueta, id) {
  let label = document.createElement('label')
  let clase = document.createAttribute('class')
  let forid = document.createAttribute('for')
  clase.value="label"
  forid.value=id
  label.setAttributeNode(clase)
  label.setAttributeNode(forid)
  label.textContent = etiqueta
  e.appendChild(label)
}

function creaInput(e, titulo, tipo, id, name) {
  creaTitulo(formulario, titulo, id)
  let input = document.createElement('input')
  input.type=tipo
  input.id=id
  input.name=name
  e.appendChild(input)
}

function creaSalto(e) {
  let salto = document.createElement('br')
  e.appendChild(salto)
}

function creaRadioButton(e, name, texto, id, valor) {
  let radioB = document.createElement('input')
  let fvalue = document.createAttribute('value')
  radioB.type = 'radio'
  radioB.name = name
  radioB.id = id
  fvalue.value=valor
  radioB.setAttributeNode(fvalue)
  e.appendChild(radioB)
  creaLabel(e, texto, id)
  creaSalto(e)
}

function creaCheck(e, texto, id, valor) {
  let checkB = document.createElement('input')
  let fvalue = document.createAttribute('value')
  checkB.type = 'checkbox'
  checkB.id = id
  fvalue.value=valor
  checkB.setAttributeNode(fvalue)
  e.appendChild(checkB)
  creaLabel(e, texto, id)
  creaSalto(e)
}

function agregaInputs() {
  creaInput(formulario, 'DNI', 'text', 'dni', 'dni')
  creaInput(formulario, 'Nombre', 'text', 'nombre', 'nombre')
  creaInput(formulario, 'Apellidos', 'text', 'apellidos', 'apellidos')
  creaInput(formulario, 'Dirección', 'text','direccion', 'direccion')
  creaInput(formulario, 'Teléfono', 'text', 'telefono', 'telefono')
}

function agregaRadio1() {
  creaTitulo(formulario, 'Cuantas veces te lavas las manos')
  creaRadioButton(formulario, 'lavar', '1 vez al día', 'lavar1', '1 vez al día' )
  creaRadioButton(formulario, 'lavar', '3 veces al día', 'lavar2', '3 veces al día')
  creaRadioButton(formulario, 'lavar', '5 veces al día', 'lavar3', '5 veces al día')
  creaRadioButton(formulario, 'lavar', 'Alguna vez me las lavo', 'lavar4', 'Alguna vez me las lavo')
  creaRadioButton(formulario, 'lavar', 'Nunca me lavo las manos', 'lavar5', 'Nunca me lavo las manos')
}

function agregaRadio2() {
  creaTitulo(formulario, 'Elige la mejor de las siguientes películas')
  creaRadioButton(formulario, 'peliculas', 'Chucky', 'pelicula1', 'Chucky')
  creaRadioButton(formulario, 'peliculas', 'Titanic', 'pelicula2', 'Titanic')
  creaRadioButton(formulario, 'peliculas', 'Ironman', 'pelicula3', 'Ironman')
  creaRadioButton(formulario, 'peliculas', 'Batman', 'pelicula4', 'Batman')
  creaRadioButton(formulario, 'peliculas', 'El padrino', 'pelicula5', 'El padrino')
}

function agregaCheck() {
  creaTitulo(formulario, 'De los siguientes deportes, elige tus favoritos')
  creaCheck(formulario, 'Golf', "deporte1", 'Golf')
  creaCheck(formulario, 'Alpinismo', "deporte2", 'Alpinismo')
  creaCheck(formulario, 'Tiro con Arco', "deporte3", 'Tiro con Arco')
  creaCheck(formulario, 'Natación', "deporte4", 'Natación')
  creaCheck(formulario, 'Ninguno', "deporte5", 'Ninguno')
}

function agregaImagen(e, titulo, url) {
  creaTitulo(e, titulo)
  let imagen = document.createElement('img')
  imagen.src = url
  e.appendChild(imagen)
}

function creaSelect(e, titulo, opciones) {
  creaTitulo(e, titulo)
  let select = document.createElement('select')
  for (let i = 0; i < opciones.length; i++) {
    let opcion = document.createElement('option')
    opcion.textContent = opciones[i]
    select.appendChild(opcion)
  }
  e.appendChild(select)
}

function creaTextArea(e, titulo, textoInterno) {
  creaTitulo(e, titulo)
  let textArea = document.createElement('textarea')
  textArea.placeholder = textoInterno
  textArea.cols = 30
  textArea.rows = 10
  e.appendChild(textArea)
}


contenedor.append(formulario)
creaH1(formulario, 'Requerimiento 1')
agregaInputs()
agregaRadio1()
agregaRadio2()
agregaCheck()
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/300x300')
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/301x301')
let opciones = ['Elige una fruta', 'Fruta de la pasión', 'Banana', 'Melón', 'Fresa']
creaSelect(formulario, 'Fruta preferida', opciones)
creaTextArea(formulario, 'Mensaje', 'Escribe tu mensaje')
