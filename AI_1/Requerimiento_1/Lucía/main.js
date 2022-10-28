//Creo el título
function crearTitulo(){
    var titulo = document.createElement("h1");
    titulo.id = "titulo1" 
    var contenido = document.createTextNode("Cuestionario Fiesta Navidad");
    titulo.appendChild(contenido);
    document.body.appendChild(titulo);
}

//Creo los 5 campos de texto
function crearLabel(id, nombre){
    var etiqueta = document.createElement("label");
    etiqueta.id = id;
    var contenido = document.createTextNode(nombre + "  ");
    etiqueta.appendChild(contenido);
    document.body.appendChild(etiqueta);
}

function crearInput(){
    let input = document.createElement('input')
    document.body.appendChild(input) 
}

function crearCampoTexto(id, nombre) {
    crearLabel(id, nombre);
    crearInput();
    salto();
    salto();
}

function salto(){
    let salto = document.createElement('br')
    document.body.appendChild(salto)
}

//Creo los RadioButtons
function crearRadioButtons(name, texto) {
    let rb = document.createElement('input')
    rb.type = 'radio'
    rb.name = name
    document.body.appendChild(rb)
    crearLabel(texto, texto)
    salto();
  }

function radiosDieta() {
    crearLabel('tituloDieta','¿Tienes alguna restricción en tu dieta?')
    salto();
    crearRadioButtons('dieta', 'Vegetariano')
    crearRadioButtons('dieta', 'Vegano')
    crearRadioButtons('dieta', 'Celiaco')
    crearRadioButtons('dieta', 'Ninguna')
    salto();
  }

function radiosBebidaPreferida() {
    crearLabel('tituloBebida','¿Qué beberás?')
    salto();
    crearRadioButtons('bebida', 'Ginebra')
    crearRadioButtons('bebida', 'Whisky')
    crearRadioButtons('bebida', 'Ron')
    crearRadioButtons('bebida', 'No bebo alcohol')
    salto();
}

//Creo los checkbox
function crearCheckbox(name, texto) {
    let cb = document.createElement('input')
    cb.type = 'checkbox'
    cb.name = name
    document.body.appendChild(cb)
    crearLabel(texto, texto)
    salto();
  }

function checkFecha() {
    crearLabel('checkFecha','Seleccione los días preferidos para la cena')
    salto();
    crearCheckbox('fechaCena', 'Viernes 15 de diciembre')
    crearCheckbox('fechaCena', 'Sábado 16 de diciembre')
    crearCheckbox('fechaCena', 'Jueves 21 de diciembre')
    crearCheckbox('fechaCena', 'Viernes 22 de diciembre')
    crearCheckbox('fechaCena', 'Sábado 23 de diciembre')
    salto();
}

//Introduzco las imágenes
function crearImagen(idTitulo, textoTitulo, src){
    crearLabel(idTitulo,textoTitulo);
    salto();
    let imagen = document.createElement('img');
    imagen.src = src;
    imagen.width = 500;
    document.body.appendChild(imagen)
}

function imagenesFiestas(idTitulo, titulo, idImagen1, imagen1, src1, idImagen2, imagen2, src2){
    crearLabel(idTitulo, titulo);
    salto();
    crearImagen(idImagen1, imagen1, src1);
    salto();
    salto();
    crearImagen(idImagen2, imagen2, src2);
    salto();
    salto();
}

//Pongo el campo select
function creaSelect(idTitulo, titulo, opciones) {
    crearLabel(idTitulo, titulo);
    let select = document.createElement('select');
    for (let i = 0; i < opciones.length; i++) {
      let opcion = document.createElement('option')
      opcion.textContent = opciones[i]
      select.appendChild(opcion)
    }
    document.body.appendChild(select);
    salto();
    salto();
  }


//Pongo el TextArea
function crearTextArea(idTitulo, textoTitulo, textoArea){
    crearLabel(idTitulo,textoTitulo);
    salto();
    let textArea = document.createElement('textarea');
    textArea.placeholder = textoArea;
    document.body.appendChild(textArea)
    textArea.cols = 50;
    textArea.rows = 5;
}


//Monto la aplicación
crearTitulo();
crearCampoTexto("dni", "DNI");
crearCampoTexto("nombre", "Nombre");
crearCampoTexto("apellidos", "Apellidos");
crearCampoTexto("direccion", "Dirección");
crearCampoTexto("telefono", "Teléfono");
salto();
radiosDieta();
radiosBebidaPreferida();
checkFecha();
imagenesFiestas("tituloImagenes", "¿Qué tipo de fiesta os gustaría?",
                "imagen1", "Fiesta clásica", "https://cope-cdnmed.agilecontent.com/resources/jpg/3/1/1544205464913.jpg",
                "imagen2", "Fiesta temática", "https://mariateresaecheverriasanchez.files.wordpress.com/2014/12/disfraces-caseros-grupo-blancanieves-enanitos.jpg")
let opciones = ['Disfraces por departamentos', 'Jerseys feos de Navidad', 'Disfraces películas', 'Ninguno'];
creaSelect("tituloSelect", "¿Qué temática elegirías?", opciones);
crearTextArea("Sugerencia", "¿Alguna otra sugerencia?", "Escribe aquí");
