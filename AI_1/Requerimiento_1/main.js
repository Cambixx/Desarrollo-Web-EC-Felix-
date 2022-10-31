
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
 * La función crea una variable llamada 'h1' donde creamos un nodo de tipo 'h1'
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
 * La función crea una variable llamada 'h3' donde creamos un nodo de tipo 'h3'
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
 * La función crea una variable llamada 'span' donde creamos un nodo de tipo 'h3'
 * Luego con 'textContent' le gregamos el texto pasado por parámetro
 * Añadimos el texto (span) como hijo al nodo pasado por parámetro con 'appendChild'
 */
function creaSpan(nodo, texto) {
  let span = document.createElement('span')
  span.textContent = texto
  nodo.appendChild(span)
}

/**
 * Función que recibe dos parámetros y la vamos a usar para crear etiquetas de tipo 'input'
 * @param 'nodo' Es el nodo al cual le vamos a añadir el input
 * @param 'título' Es título que queremos dar al input
 * La función crea un titulo h3 con el uso de la función creada anteriormente 'creaH3'
 * y se añade como hijo al nodo pasado por parámetro
 * Creamos una variable llamada 'input' donde creamos un nodo de tipo 'input'
 * Añadimos el input como hijo al nodo pasado por parámetro con 'appendChild'
 */
function creaInput(nodo, titulo) {
  creaH3(formulario, titulo)
  let input = document.createElement('input')
  nodo.appendChild(input)
}

/**
 * Función que recibe un parámetros y la vamos a usar para crear etiquetas de tipo 'br'
 * @param 'nodo' Es el nodo al cual le vamos a añadir el salto de línea
 * 
 * Creamos una variable llamada 'salto' donde creamos un nodo de tipo 'br'
 * Añadimos el br como hijo al nodo pasado por parámetro con 'appendChild'
 */
function creaSalto(nodo) {
  let salto = document.createElement('br')
  nodo.appendChild(salto)
}

/**
 * Función que recibe tres parámetros y la vamos a usar para crear etiquetas de tipo 'input' 
 * de tipo radio
 * 
 * @param 'nodo' Es el nodo al cual le vamos a añadir el radio button
 * @param 'name' es el valor del atributo name del radio button que vamos a crear
 * @param 'texto' El texto que va a tener al lado el radio button
 * 
 * Creamos una variable llamada 'radioB' donde creamos un nodo de tipo 'input'
 * A esa variable le cambiamos el tipo a 'radio' con 'type'
 * Asignamos al atributo 'name' el valor que se le ha pasado a función por parámetro
 * Añadimos el radio button como hijo al nodo pasado por parámetro con 'appendChild'
 * usamos las funciones creaSpan y creaSalto para asignar el texto y dar un salto de 
 * línea respectivamente.
 */
function creaRadioButton(nodo, name, texto) {
  let radioB = document.createElement('input')
  radioB.type = 'radio'
  radioB.name = name
  nodo.appendChild(radioB)
  creaSpan(nodo, texto)
  creaSalto(nodo)
}

/**
 * Función que recibe dos parámetros y la vamos a usar para crear etiquetas de tipo 'input' 
 * de tipo checkbox
 * 
 * @param 'nodo' Es el nodo al cual le vamos a añadir el check
 * @param 'texto' El texto que va a tener al lado el check 
 * Creamos una variable llamada 'chekB' donde creamos un nodo de tipo 'input'
 * A esa variable le cambiamos el tipo a 'checkbox' con 'type'
 * Añadimos el checkbox como hijo al nodo pasado por parámetro con 'appendChild'
 * usamos las funciones creaSpan y creaSalto para asignar el texto y dar un salto de 
 * línea respectivamente.
 */
function creaCheck(nodo, texto) {
  let checkB = document.createElement('input')
  checkB.type = 'checkbox'
  nodo.appendChild(checkB)
  creaSpan(nodo, texto)
  creaSalto(nodo)
}

/**
 * Función que recibe tres parámetros y la vamos a usar para crear etiquetas de tipo 'textArea'
 * 
 * @param 'nodo' Es el nodo al cual le vamos a añadir el textArea 
 * @param 'título' Es título que queremos dar al textArea
 * @param 'textoInterno' Es el texto que va a tener el placeHolder del textArea
 * Llama a la función creaH3 que se encarga de recibir los parámetros nodo y título
 * Creamos una variable llamada 'textArea' donde creamos un nodo de tipo 'textArea'
 * A esa variable le modificamos el placeHolder pasandole el valor del parámetro recibido por 
 * la función
 * Modificamos tambien el número de columnas y filas
 * Añadimos el textArea como hijo al nodo pasado por parámetro con 'appendChild'
 */
 function creaTextArea(nodo, titulo, textoInterno) {
  creaH3(nodo, titulo)
  let textArea = document.createElement('textarea')
  textArea.placeholder = textoInterno
  textArea.cols = 30
  textArea.rows = 10
  nodo.appendChild(textArea)
}

/**
 * Función sin parámetros que vamos a usar para agregar los inputs que necesitamos
 * Llama a la función creaInput que se encarga de recibir los parámetros 
 * que necesitamos 
 */
function agregaInputs() {
  creaInput(formulario, 'DNI')
  creaInput(formulario, 'Nombre')
  creaInput(formulario, 'Apellidos')
  creaInput(formulario, 'Dirección')
  creaInput(formulario, 'Teléfono')
}

/**
 * Función sin parámetros que crea un título h3 y agrega los radio button que necesitamos
 * Llama a funciones creaH3 y creaRadioButton que se encargan de recibir los parámetros
 * en funcion de las necesidades
 */
function agregaRadio1() {
  creaH3(formulario, 'Cuantas veces te lavas las manos')
  creaRadioButton(formulario, 'lavar', '1 vez al día')
  creaRadioButton(formulario, 'lavar', '3 veces al día')
  creaRadioButton(formulario, 'lavar', '5 veces al día')
  creaRadioButton(formulario, 'lavar', 'Alguna vez me las lavo')
  creaRadioButton(formulario, 'lavar', 'Nunca me lavo las manos')
}

/**
 * Función sin parámetros que crea un título h3 y agrega los radio button que necesitamos
 * Llama a funciones creaH3 y creaRadioButton que se encargan de recibir los parámetros
 * en funcion de las necesidades
 */
function agregaRadio2() {
  creaH3(formulario, 'Elige la mejor de las siguientes películas')
  creaRadioButton(formulario, 'peliculas', 'Chucky')
  creaRadioButton(formulario, 'peliculas', 'Titanic')
  creaRadioButton(formulario, 'peliculas', 'Ironman')
  creaRadioButton(formulario, 'peliculas', 'Batman')
  creaRadioButton(formulario, 'peliculas', 'El padrino')
}

/**
 * Función sin parámetros que crea un título h3 y agrega los checkbox que necesitamos
 * Llama a funciones creaH3 y creaRadioButton que se encargan de recibir los parámetros
 * en funcion de las necesidades
 */
function agregaCheck() {
  creaH3(formulario, 'De los siguientes deportes, elige tus favoritos')
  creaCheck(formulario, 'Golf')
  creaCheck(formulario, 'Alpinismo')
  creaCheck(formulario, 'Tiro con Arco')
  creaCheck(formulario, 'Natación')
  creaCheck(formulario, 'Ninguno')
}

/**
 * Función que recibe tres parámetros y la vamos a usar para agregar etiquetas de tipo 'img'
 *  
 * @param 'nodo' Es el nodo al cual le vamos a añadir la imagen
 * @param 'título' Es título que queremos dar a la imagen
 * @param 'url' El la ruta donde va a estar guardada la imagen
 * Llama a la función creaH3 que se encarga de recibir los parámetros 'nodo' y 'título'
 * Creamos una variable llamada 'imagen' donde creamos un nodo de tipo 'img'
 * Cambiamos el atributo 'src' y le pasamos la url pasada por parámetro
 * Añadimos la imagen como hijo al nodo pasado por parámetro con 'appendChild'
 */
function agregaImagen(nodo, titulo, url) {
  creaH3(nodo, titulo)
  let imagen = document.createElement('img')
  imagen.src = url
  nodo.appendChild(imagen)
}

/**
 * Función que recibe tres parámetros y la vamos a usar para agregar etiquetas de tipo 'select'
 * 
 * @param 'nodo' Es el nodo al cual le vamos a añadir el select 
 * @param 'título' Es título que queremos dar al select 
 * @param 'opciones' Es un array con las opciones del select
 * Llama a la función creaH3 que se encarga de recibir los parámetros 'nodo' y 'título'
 * Creamos una variable llamada 'select' donde creamos un nodo de tipo 'select'
 * Hacemos un bucle for que va recorrer el array 'opciones' pasado por parámetros y por cada 
 * posición (opción) del array se crea una variable llamada 'opción' que crea un elemento
 * 'option',luego con 'textContent', a ese elemento option le agregamos el contenido del array 'opciones'
 * en esa posición, luego añadimos la opción como hijo al select con 'appendChild'
 * Añadimos el select como hijo al nodo pasado por parámetro con 'appendChild'
 */
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

/**
 * Al contenedor (div inicial que está en el HTML) le añadimos el formulario
 * Creamos un título H1 con el uso de la función creaH1
 * Agregamos los inputs llamando a la función agregaInputs()
 * Agregamos los primeros radio buttons llamando a la función agregaRadio1()
 * Agregamos los segundos radio buttons llamando a la función agregaRadio2()
 * Agregamos los checkbox llamando a la función agregaCheck()
 * Agregamos una imagen llamando a la función agregaImagen que recibe por parámetros
 * el formulario, un título y una url que contendrá la imagen que se va a mostrar y de
 * igual manera para agregar la segunda imagen.
 * Creamos un array llamado 'opciones' que contiene las opciones segun la necesidad
 * Agregamos el select llamando a la función creaSelect() que recibe por parámetros el
 * formulario, el título y el array 'opciones' 
 * Agregamos el textArea llamando a la función creaTextArea() que recibe por parámetros
 * el formulario, el título y el placehoder que va a contener el mismo
 */
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
