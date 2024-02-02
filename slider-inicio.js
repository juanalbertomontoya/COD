

$(".imagen-slider").click(function () {
  //mueve la imagen del slider a una imgen verde

  $(".contenedor-imagen-slider-inicio").toggleClass("off");

  //desliza el texto de tenemos para traer el de somos
  // setTimeout(function(){  }, 3000);
  $(".contenedor-somos-tenemos").toggleClass("desliza");

  //oculta el texto tenemos desvaneciendo

  $(".contenedor-tenemos-texto").toggleClass("on");

  //aparece el titulo y subtitulo de somos y luego el parrafo

  $(".titulo-somos").toggleClass("on");

  $(".titulo-somos-bold").toggleClass("on");

  $(".contenedor-somos-h2").toggleClass("on");

  return false;
});
