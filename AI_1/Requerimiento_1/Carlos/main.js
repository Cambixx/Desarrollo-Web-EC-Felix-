
/**
 * Lo primero es tener acceso al 'div' que hemos creado en el 
 * HTML, para ello creamos una variable llamada 'contenedor' con
 * la cual vamos a tener acceso a ese nodo.
 * Con 'document.querySelector('.contenedor')' accedemos a la etiqueta 
 * cuya clase es 'contenedor' 
 */
let contenedor = document.querySelector('.contenedor');

/**
 * Creamos una variable llamada 'formulario' donde vamos a almacenar un 
 * nuevo nodo de tipo form
 */
let formulario = document.createElement('form')

/**
 * Función 'creaH1' recibe dos parámetros y la vamos a usar para crear títulos de tipo H1
 *  
 * @param 'nodo' Es el nodo al cual le vamos a añadir el título
 * @param 'titulo' Es el Título que vamos a dar 
 * La función crea una variable 'h1' donde creamos un nodo de tipo 'h1'
 * Luego con 'textContent' le gregamos el título pasado por parámetro
 * Añadimos el título (h1) como hijo al nodo pasado por parámetro con 'appendChild'
 */
function creaH1(nodo, titulo) {
  let h1 = document.createElement('h1')
  h1.textContent = titulo
  nodo.appendChild(h1)
}

/**
 * Función que recibe dos parámetros y la vamos a usar para crear títulos de tipo 'h2'
 * 
 * @param 'nodo' Es el nodo al cual le vamos a añadir el título
 * @param 'texto' Es título que queremos crear
 * La función crea una variable 'h3' donde creamos un nodo de tipo 'h3'
 * Luego con 'textContent' le gregamos el texto pasado por parámetro
 * Añadimos el título (h3) como hijo al nodo pasado por parámetro con 'appendChild'
 */
function creaH3(nodo, titulo) {
  let h3 = document.createElement('h3')
  h3.textContent = titulo
  nodo.appendChild(h3)
}

/**
 * Función que recibe dos parámetros y la vamos a usar para crear etiquetas de tipo 'span'
 * @param 'nodo' Es el nodo al cual le vamos a añadir el título
 * @param 'texto'Es texto que queremos crear 
 * Luego con 'textContent' le gregamos el texto pasado por parámetro
 * Añadimos el texto (span) como hijo al nodo pasado por parámetro con 'appendChild'
 */
function creaSpan(nodo, texto) {
  let span = document.createElement('span')
  span.textContent = texto
  nodo.appendChild(span)
}

function creaInput(nodo, titulo) {
  creaH3(formulario, titulo)
  let input = document.createElement('input')
  nodo.appendChild(input)
}

function creaSalto(nodo) {
  let salto = document.createElement('br')
  nodo.appendChild(salto)
}

function creaRadioButton(nodo, name, texto) {
  let radioB = document.createElement('input')
  radioB.type = 'radio'
  radioB.name = name
  nodo.appendChild(radioB)
  creaSpan(nodo, texto)
  creaSalto(nodo)
}

function creaCheck(nodo, texto) {
  let checkB = document.createElement('input')
  checkB.type = 'checkbox'
  nodo.appendChild(checkB)
  creaSpan(nodo, texto)
  creaSalto(nodo)
}

function agregaInputs() {
  creaInput(formulario, 'DNI')
  creaInput(formulario, 'Nombre')
  creaInput(formulario, 'Apellidos')
  creaInput(formulario, 'Dirección')
  creaInput(formulario, 'Teléfono')
}

function agregaRadio1() {
  creaH3(formulario, 'Cuantas veces te lavas las manos')
  creaRadioButton(formulario, 'lavar', '1 vez al día')
  creaRadioButton(formulario, 'lavar', '3 veces al día')
  creaRadioButton(formulario, 'lavar', '5 veces al día')
  creaRadioButton(formulario, 'lavar', 'Alguna vez me las lavo')
  creaRadioButton(formulario, 'lavar', 'Nunca me lavo las manos')
}

function agregaRadio2() {
  creaH3(formulario, 'Elige la mejor de las siguientes películas')
  creaRadioButton(formulario, 'peliculas', 'Chucky')
  creaRadioButton(formulario, 'peliculas', 'Titanic')
  creaRadioButton(formulario, 'peliculas', 'Ironman')
  creaRadioButton(formulario, 'peliculas', 'Batman')
  creaRadioButton(formulario, 'peliculas', 'El padrino')
}

function agregaCheck() {
  creaH3(formulario, 'De los siguientes deportes, elige tus favoritos')
  creaCheck(formulario, 'Golf')
  creaCheck(formulario, 'Alpinismo')
  creaCheck(formulario, 'Tiro con Arco')
  creaCheck(formulario, 'Natación')
  creaCheck(formulario, 'Ninguno')
}

function agregaImagen(nodo, titulo, url) {
  creaH3(nodo, titulo)
  let imagen = document.createElement('img')
  imagen.src = url
  nodo.appendChild(imagen)
}

function creaSelect(nodo, titulo, opciones) {
  creaH3(nodo, titulo)
  let select = document.createElement('select')
  for (let i = 0; i < opciones.length; i++) {
    let opcion = document.createElement('option')
    opcion.textContent = opciones[i]
    select.appendChild(opcion)
  }
  nodo.appendChild(select)
}

function creaTextArea(nodo, titulo, textoInterno) {
  creaH3(nodo, titulo)
  let textArea = document.createElement('textarea')
  textArea.placeholder = textoInterno
  textArea.cols = 30
  textArea.rows = 10
  nodo.appendChild(textArea)
}


contenedor.append(formulario)
creaH1(formulario, 'Título')
agregaInputs()
agregaRadio1()
agregaRadio2()
agregaCheck()
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/300x300')
agregaImagen(formulario, 'Imagen Random', 'https://source.unsplash.com/301x301')
let opciones = ['Fruta de la pasión', 'Banana', 'Melón', 'Fresa']
creaSelect(formulario, 'Fruta preferida', opciones)
creaTextArea(formulario, 'Mensaje', 'Escribe tu mensaje')
