


$('#menu-somos').click(function(){

  //mueve la imagen del slider a una imgen verde

  $('.contenedor-imagen-slider-inicio').toggleClass('off');

  //desliza el texto de tenemos para traer el de somos
  // setTimeout(function(){  }, 3000);
  $('.contenedor-somos-tenemos').toggleClass('desliza');

  //oculta el texto tenemos desvaneciendo

  $('.contenedor-tenemos-texto').toggleClass('off');

  //aparece el titulo y subtitulo de somos y luego el parrafo

  $('.titulo-somos').toggleClass('on');
  
  $('.titulo-somos-bold').toggleClass('on');

  $('.contenedor-somos-texto h2').toggleClass('on');

  return false;
});