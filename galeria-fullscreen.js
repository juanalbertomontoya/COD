//abre el background del fullscreen al hacer click en un cuadro de la galeria

$('.cuadro-galeria').on('click',function() {
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
      }, 2700)
 });

 //cierra el background 

 $('.exit').on('click',function() {
  $('.galeria-fullscreen').addClass('off');

  //elimina la visibilidad de la imagen

  $('.imagenfull').removeClass('on');

  //elimina la visibiidad del texto

  $('.textoimagenfull').removeClass('on');

  //elimina la visibildiad del boton de salir

  $('.exit').removeClass('on');

});


//hace zoom en la imagen al hacer hover

$('.imagenfull').zoom();