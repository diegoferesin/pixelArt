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
    // divNuevo.className = [i];
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

// function iniciarAcordeon() {
//   $('.js-encabezado').on('click', encabezadoHandler);
// }

// function encabezadoHandler(event) {
//   event.preventDefault();
//   $(this)
//     .next('.js-descripcion')
//     .slideToggle();
// }

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

//var mouseApretado = grillaPixeles.addEventListener('mousedown', pintarGrilla);
//var miMouseUp = grillaPixeles.addEventListener('mouseup', pasaAlgo);

// function pintarEnMovimiento() {
//   if (mouseApretado) {
//     pintarGrilla;
//   } else {
//     console.log('No sé qué pasaría acá');
//   }
// }

// function iniciarDrone() {
//   $('#grilla-pixeles').on('mousemove', mueveElDrone);
// }

// function mueveElDrone(event) {
//   $('.cursor-personalizado').css({
//     left: event.pageX + 'px',
//     top: event.pageY + 'px'
//   });
// }

// iniciarDrone();
