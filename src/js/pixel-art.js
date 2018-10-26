/** global $ */
var nombreColores = [
  'White',
  'LightYellow',
  'LemonChiffon',
  'LightGoldenrodYellow',
  'PapayaWhip',
  'Moccasin',
  'PeachPuff',
  'PaleGoldenrod',
  'Bisque',
  'NavajoWhite',
  'Wheat',
  'BurlyWood',
  'Tan',
  'Khaki',
  'Yellow',
  'Gold',
  'Orange',
  'DarkOrange',
  'OrangeRed',
  'Tomato',
  'Coral',
  'DarkSalmon',
  'LightSalmon',
  'LightCoral',
  'Salmon',
  'PaleVioletRed',
  'Pink',
  'LightPink',
  'HotPink',
  'DeepPink',
  'MediumVioletRed',
  'Crimson',
  'Red',
  'FireBrick',
  'DarkRed',
  'Maroon',
  'Brown',
  'Sienna',
  'SaddleBrown',
  'IndianRed',
  'RosyBrown',
  'SandyBrown',
  'Goldenrod',
  'DarkGoldenrod',
  'Peru',
  'Chocolate',
  'DarkKhaki',
  'DarkSeaGreen',
  'MediumAquaMarine',
  'MediumSeaGreen',
  'SeaGreen',
  'ForestGreen',
  'Green',
  'DarkGreen',
  'OliveDrab',
  'Olive',
  'DarkOliveGreen',
  'YellowGreen',
  'LawnGreen',
  'Chartreuse',
  'GreenYellow',
  'Lime',
  'SpringGreen',
  'LimeGreen',
  'LightGreen',
  'PaleGreen',
  'PaleTurquoise',
  'AquaMarine',
  'Cyan',
  'Turquoise',
  'MediumTurquoise',
  'DarkTurquoise',
  'DeepSkyBlue',
  'LightSeaGreen',
  'CadetBlue',
  'DarkCyan',
  'Teal',
  'Steelblue',
  'LightSteelBlue',
  'Honeydew',
  'LightCyan',
  'PowderBlue',
  'LightBlue',
  'SkyBlue',
  'LightSkyBlue',
  'DodgerBlue',
  'CornflowerBlue',
  'RoyalBlue',
  'SlateBlue',
  'MediumSlateBlue',
  'DarkSlateBlue',
  'Indigo',
  'Purple',
  'DarkMagenta',
  'Blue',
  'MediumBlue',
  'DarkBlue',
  'Navy',
  'Thistle',
  'Plum',
  'Violet',
  'Orchid',
  'DarkOrchid',
  'Fuchsia',
  'Magenta',
  'MediumOrchid',
  'BlueViolet',
  'DarkViolet',
  'DarkOrchid',
  'MediumPurple',
  'Lavender',
  'Gainsboro',
  'LightGray',
  'Silver',
  'DarkGray',
  'Gray',
  'DimGray',
  'LightSlateGray',
  'DarkSlateGray',
  'Black'
];
var paleta = $('#paleta');
var grillaPixeles = $('#grilla-pixeles');
var indicadorDeColor = $('#indicador-de-color');

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = $('#color-personalizado');
colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = colorPersonalizado.val();
  indicadorDeColor.css('background-color', colorActual);
});

function recorreListaDeColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'color-paleta';
    nuevoDiv.title = nombreColores[i];
    var st = nuevoDiv.style;
    st.backgroundColor = nombreColores[i];
    paleta.append(nuevoDiv);
  }
}

function creaGrilla(num) {
  for (var i = 0; i < num; i++) {
    var divNuevo = document.createElement('div');
    divNuevo.className = 'divsDeLaGrilla';
    grillaPixeles.append(divNuevo);
  }
}

recorreListaDeColores(nombreColores);
creaGrilla(1750);

paleta.click(cambiaIndicador);

function cambiaIndicador(e) {
  var color = $(e.target).css('background-color');
  indicadorDeColor.css('background-color', color);
}

grillaPixeles.click(pintarGrilla);
function pintarGrilla(e) {
  var color = indicadorDeColor.css('background-color');
  if (color !== 'rgba(0, 0, 0, 0)') {
    var elemento = $(e.target);
    elemento.css('background-color', color);
  } else {
    alert('Seleccione un color antes de pintar');
  }
}

var mouseApretado = false;
function mouseApretadoATrue() {
  mouseApretado = true;
}

function mouseApretadoAFalse() {
  mouseApretado = false;
}

grillaPixeles.mousedown(mouseApretadoATrue);
grillaPixeles.mouseup(mouseApretadoAFalse);

function pintarEnMovimiento(e) {
  if (mouseApretado) {
    pintarGrilla(e);
  }
}
grillaPixeles.mousemove(pintarEnMovimiento);

var botonBorrar = $('#borrar');
botonBorrar.click(borrarGrilla);

// function borrarGrilla() {
//   var divsSeleccionados = $('#grilla-pixeles div');
//   divsSeleccionados.each(function() {this.animate({ 'background-color': 'rgba(0, 0, 0, 0)' }, 700)

function borrarGrilla() {
  var divsDeLaGrilla = $('.divsDeLaGrilla');
  divsDeLaGrilla.animate({ 'background-color': 'White' }, 700);
}

var imagenBatman = $('#batman');
var imagenWonder = $('#wonder');
var imagenFlash = $('#flash');
var imagenInvisible = $('#invisible');

imagenBatman.click(cargarSuperheroeBatman);
imagenWonder.click(cargarSuperheroeWonder);
imagenFlash.click(cargarSuperheroeFlash);
imagenInvisible.click(cargarSuperheroeInvisible);

function cargarSuperheroeBatman() {
  var $pixeles = $('#grilla-pixeles div');
  for (var i = 0; i < batman.length; i++) {
    $pixeles[i].style.backgroundColor = batman[i];
  }
}

function cargarSuperheroeWonder() {
  var $pixeles = $('#grilla-pixeles div');
  for (var i = 0; i < wonder.length; i++) {
    $pixeles[i].style.backgroundColor = wonder[i];
  }
}

function cargarSuperheroeFlash() {
  var $pixeles = $('#grilla-pixeles div');
  for (var i = 0; i < flash.length; i++) {
    $pixeles[i].style.backgroundColor = flash[i];
  }
}

function cargarSuperheroeInvisible() {
  var $pixeles = $('#grilla-pixeles div');
  for (var i = 0; i < invisible.length; i++) {
    $pixeles[i].style.backgroundColor = invisible[i];
  }
}

var guardar = $('#guardar');
guardar.click(guardarPixelArt);

function funcionaFunciona() {
  alert('Funciona el escuchador');
}
