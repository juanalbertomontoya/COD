if( $(window).width() > 1241 ) {
  // Animacion de las descripciones de servcios en dispositivos grandes o de escritorio //

  //Residencial
$("#residencial").hover(function () {
  $("#residencial > .descripcion").toggleClass("on");
  $("#residencial > .contenedor > p > .barra-texto").toggleClass("on");
});

//Comercial
$("#comercial").hover(function () {
  $("#comercial > .descripcion").toggleClass("on");
  $("#comercial > .contenedor > p > .barra-texto").toggleClass("on");
});

//Industrial
$("#industrial").hover(function () {
  $("#industrial > .descripcion").toggleClass("on");
  $("#industrial > .contenedor > p > .barra-texto").toggleClass("on");
});

//Educacional
$("#educacional").hover(function () {
  $("#educacional > .descripcion").toggleClass("on");
  $("#educacional > .contenedor > p > .barra-texto").toggleClass("on");
});

//Privadas
$("#privadas").hover(function () {
  $("#privadas > .descripcion").toggleClass("on");
  $("#privadas > .contenedor > p > .barra-texto").toggleClass("on");
});

//Estado
$("#estado").hover(function () {
  $("#estado > .descripcion").toggleClass("on");
  $("#estado > .contenedor > p > .barra-texto").toggleClass("on");
});

//Rectificación
$("#rectificacion").hover(function () {
  $("#rectificacion > .descripcion").toggleClass("on");
  $("#rectificacion > .contenedor > p > .barra-texto").toggleClass("on");
});

//Inscripciones
$("#inscripciones").hover(function () {
  $("#inscripciones > .descripcion").toggleClass("on");
  $("#inscripciones > .contenedor > p > .barra-texto").toggleClass("on");
});

//Independización
$("#independizacion").hover(function () {
  $("#independizacion > .descripcion").toggleClass("on");
  $("#independizacion > .contenedor > p > .barra-texto").toggleClass("on");
});

} else {
  // Animacion de las descripciones de servicios en dispositivos pequeños o movil //

  //Residencial
$("#residencial").click(function () {
  $("#residencial > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#residencial) > .descripcion").removeClass("on")
  $("#residencial > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#residencial) > .contenedor > p > .barra-texto").removeClass("on");
});

//Comercial
$("#comercial").click(function () {
  $("#comercial > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#comercial) > .descripcion").removeClass("on")
  $("#comercial > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#comercial) > .contenedor > p > .barra-texto").removeClass("on");
});

//Industrial
$("#industrial").click(function () {
  $("#industrial > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#industrial) > .descripcion").removeClass("on")
  $("#industrial > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#industrial) > .contenedor > p > .barra-texto").removeClass("on");
});

//Educacional
$("#educacional").click(function () {
  $("#educacional > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#educacional) > .descripcion").removeClass("on")
  $("#educacional > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#educacional) > .contenedor > p > .barra-texto").removeClass("on");
});

//Privadas
$("#privadas").click(function () {
  $("#privadas > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#privadas) > .descripcion").removeClass("on")
  $("#privadas > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#privadas) > .contenedor > p > .barra-texto").removeClass("on");
});

//Estado
$("#estado").click(function () {
  $("#estado > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#estado) > .descripcion").removeClass("on")
  $("#estado > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#estado) > .contenedor > p > .barra-texto").removeClass("on");
});

//Rectificación
$("#rectificacion").click(function () {
  $("#rectificacion > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#rectificacion) > .descripcion").removeClass("on")
  $("#rectificacion > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#rectificacion) > .contenedor > p > .barra-texto").removeClass("on");
});

//Inscripciones
$("#inscripciones").click(function () {
  $("#inscripciones > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#inscripciones) > .descripcion").removeClass("on")
  $("#inscripciones > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#inscripciones) > .contenedor > p > .barra-texto").removeClass("on");
});

//Independización
$("#independizacion").click(function () {
  $("#independizacion > .descripcion").toggleClass("on");
  $(".tipos-proyectos > li:not(#independizacion) > .descripcion").removeClass("on")
  $("#independizacion > .contenedor > p > .barra-texto").toggleClass("on");
  $(".tipos-proyectos > li:not(#independizacion) > .contenedor > p > .barra-texto").removeClass("on");
});

}
