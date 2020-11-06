//animacion de la barra verde

if( $(window).width() > 1000 ) {

  $("#menu-somos").hover(function () {
    $("#barra1").toggleClass("on");
    $(".menu-elemento").toggleClass("on");
  });

  $("#menu-servicios").hover(function () {
    $("#barra2").toggleClass("on");
    $(".menu-elemento").toggleClass("on");
  });

  $("#menu-contactanos").hover(function () {
    $("#barra3").toggleClass("on");
    $(".menu-elemento").toggleClass("on");
  });

} else {

  $("#menu-somos").click(function () {
    $("#barra1").toggleClass("on");
    $(".menu-elemento > a > span:not(#barra1)").removeClass("on");
    $("#menu-somos").toggleClass("on");
    $(".menu-elemento:not(#menu-somos)").removeClass("on");
  });

  $("#menu-servicios").click(function () {
    $("#barra2").toggleClass("on");
    $(".menu-elemento > a > span:not(#barra2)").removeClass("on");
    $("#menu-servicios").toggleClass("on");
    $(".menu-elemento:not(#menu-servicios)").removeClass("on");
  });

  $("#menu-contactanos").click(function () {
    $("#barra3").toggleClass("on");
    $(".menu-elemento > a > span:not(#barra3)").removeClass("on");
    $("#menu-contactanos").toggleClass("on");
    $(".menu-elemento:not(#menu-contactanos)").removeClass("on");
  });

  $(".menu-boton").click(function () {
    $(".menu-lista").toggleClass("on");
  });

}
