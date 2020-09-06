// funcion que le da clase clicked a cuadro

$(document).ready(function () {

  //this will attach the class to every target 
  $(document).on('click', function (event) {
      $target = $(event.target);   
         $target.addClass('clicked');
     });

 });




//funcion para aparecer el fullscreen

$('.cuadro-galeria').on('click',function() {
    
    
    //coloca el clicked en el cuadro seleccionado

    $('').addClass('clicked');

    //muestra la imagen en fullscreen dependiendo de a que cuadro se haya hecho click

    setTimeout(function () {

      //muestra la primera imagen
      
      if ($('#galeria-imagen1').hasClass("clicked")) {

        $('.contenedor-imagenfull').css('margin-left', '-'+100+'%');
  
    }

     //muestra la segunda imagen
  
     else if ($('#galeria-imagen2').hasClass("clicked")) {
  
      $('.contenedor-imagenfull').css('margin-left', '-'+200+'%');
  
     }

     //muestra la tercera imagen
  
    else if ($('#galeria-imagen3').hasClass("clicked")) {
  
      $('.contenedor-imagenfull').css('margin-left', '-'+300+'%');
  
    }

     //muestra la cuarta imagen
  
     else {
  
      $('.contenedor-imagenfull').css('margin-left', '-'+400+'%');
  
    }

    }, 500);


    //abre el background del fullscreen al hacer click en un cuadro de la galeria

    $('.galeria-fullscreen').removeClass('off');
    $('.galeria-fullscreen').addClass('on');

    //aparece la imagen con un retraso

    setTimeout(function () {
    $('.imagenfull').addClass('on');
    }, 2500);


    //aparece el texto y el boton de salir

    setTimeout(function () {

      //texto

      $('.textoimagenfull').addClass('on');

      //boton de salir

      $('.exit').addClass('on');
      }, 2700);


 });



 //funciones para desplazar el fullscreen con botones




function moverFull () {

  //almacenar slider en una variable//
var sliderFull = $('.contenedor-imagenfull');
//almacenar botones//
var siguienteFull = $('#btn-next-full');
var anteriorFull = $('#btn-prev-full');


//mover ultima columna al primer lugar//

 $('.contenedor-imagenfull div:last').insertBefore('.contenedor-imagenfull div:first');

 sliderFull.css('margin-left', '-'+100+'%');


 // mover a la derecha

 function moverD() {


  // mueve el slider a la derecha
  sliderFull.animate({marginLeft:'-'+200+'%'
  } ,900, 
  function(){

    $('.contenedor-imagenfull div:first').insertAfter('.contenedor-imagenfull div:last');
    sliderFull.css('margin-left', '-'+100+'%');

    
  }
  );
     
 }

 siguienteFull.on('click',function() {
  moverD();
 });



 // mover a la izquierda

 function moverI() {



  //mueve el slider a la izquierda

  sliderFull.animate({marginLeft: 0
  } ,900, 
  function(){
    $('.contenedor-imagenfull div:last').insertBefore('.contenedor-imagenfull div:first');
    sliderFull.css('margin-left', '-'+100+'%');
  }
  );


  
 }

 anteriorFull.on('click',function() {
  moverI();
 });

 
}

 //llamada a la funcionb que mueve botones

 moverFull();






 //cierra el background 

 $('.exit').on('click',function() {
  $('.galeria-fullscreen').addClass('off');

  //elimina la visibilidad de la imagen

  $('.imagenfull').removeClass('on');

  //elimina la visibiidad del texto

  $('.textoimagenfull').removeClass('on');

  //elimina la visibildiad del boton de salir

  $('.exit').removeClass('on');

  //elimina la clase clicked en todos los elementos

  setTimeout(function () {
    $('.cuadro-galeria').removeClass('clicked');
  },700);

});


//hace zoom en la imagen al hacer hover

$(document).ready(function(){
  $('.galeria-fullscreen img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});







//--------------------------------------------------------//
//configuraciones del cambio de imagenes en el full screen//
//-------------------------------------------------------//



