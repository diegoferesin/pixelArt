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

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = colorPersonalizado.value;
  // var indicadorDeColorLocal = document.getElementById('indicador-de-color');
  indicadorDeColor.style.backgroundColor = colorActual;
});

function recorreListaDeColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDiv = document.createElement('div');
    paleta.appendChild(nuevoDiv);
    nuevoDiv.className = 'color-paleta';
    nuevoDiv.title = nombreColores[i];
    var st = nuevoDiv.style;
    st.backgroundColor = nombreColores[i];
  }
}

function creaGrilla(num) {
  for (var i = 0; i < num; i++) {
    var divNuevo = document.createElement('div');
    // divNuevo.className = [i];
    grillaPixeles.appendChild(divNuevo);
  }
}

recorreListaDeColores(nombreColores);
creaGrilla(1750);

paleta.addEventListener('click', cambiaIndicador);
// $('#paleta').click(cambiaIndicador);
function cambiaIndicador(e) {
  // console.log(e);
  e.preventDefault();
  var color = e.target.style.backgroundColor;
  indicadorDeColor.style.backgroundColor = color;
  // alert('Funciona');
  return color;
}

// function iniciarAcordeon() {
//   $('.js-encabezado').on('click', encabezadoHandler);
// }

// function encabezadoHandler(event) {
//   event.preventDefault();
//   $(this)
//     .next('.js-descripcion')
//     .slideToggle();
// }

grillaPixeles.addEventListener('click', pintarGrilla);
function pintarGrilla(e) {
  e.preventDefault();
  // var indicadorDeColor = document.getElementById('indicador-de-color');
  var color = indicadorDeColor.style.backgroundColor;
  // var divSeleccionado = $(this).style.backgroundColor;
  // divSeleccionado = color;
  // var divAPintar = document.getElementsByTagName('div');
  // divAPintar.style.backgroundColor = color;
  alert('Funciona');
}

var mouseApretado = grillaPixeles.addEventListener('mousedown', pintarGrilla);
var miMouseUp = grillaPixeles.addEventListener('mouseup', pasaAlgo);

function pintarEnMovimiento() {
  if (mouseApretado) {
    pintarGrilla;
  } else {
    console.log('No sé qué pasaría acá');
  }
}

function iniciarDrone() {
  $('#grilla-pixeles').on('mousemove', mueveElDrone);
}

function mueveElDrone(event) {
  $('.cursor-personalizado').css({
    left: event.pageX + 'px',
    top: event.pageY + 'px'
  });
}

iniciarDrone();
