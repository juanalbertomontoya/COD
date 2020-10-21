// funcion que le da clase clicked a cuadro

$(document).ready(function () {
  //this will attach the class to every target
  $(document).on("click", function (event) {
    $target = $(event.target);
    $target.addClass("clicked");
  });
});

//funcion para aparecer el fullscreen

$(".cuadro-galeria").on("click", function () {
  
  //hace zoom en la imagen al hacer hover

  setTimeout(function () {
    $(document).ready(function () {
      $(".galeria-fullscreen img")
        .wrap('<span style="display:inline-block"></span>')
        .css("display", "block")
        .parent()
        .zoom();
    });
  }, 500);

  
  //coloca el clicked en el cuadro seleccionado

  $("").addClass("clicked");

  //muestra la imagen en fullscreen dependiendo de a que cuadro se haya hecho click

  setTimeout(function () {
    //almacenar slider en una variable//
    var sliderFull = $(".contenedor-imagenfull");


    //funcion para mover a la derecha//
    function moverD() {
      // mueve el slider a la derecha
  
  
      sliderFull.animate({ "marginLeft": "-=100%" }, 1, function () {
        $(".contenedor-imagenfull div:first").insertAfter(
          ".contenedor-imagenfull div:last"
        );
        sliderFull.css("margin-left", "-" + 100 + "%");
      });
    }

    //crear las imagenes y texto de la columna uno//

    function creaColumna1() { 
      $(".full-col-1-1").append('<img src="img/galeria/col-1-1.jpeg" alt="">');
      $(".full-col-1-2").append('<img src="img/galeria/col-1-2.jpeg" alt="">');
      $(".full-col-1-3").append('<img src="img/galeria/col-1-3.jpeg" alt="">');
      $(".full-col-1-4").append('<img src="img/galeria/col-1-4.jpeg" alt="">');
     }

     function creaColumna2() { 
      $(".full-col-1-1").append('<img src="img/galeria/col-2-1.jpeg" alt="">');
      $(".full-col-1-2").append('<img src="img/galeria/col-2-2.jpeg" alt="">');
      $(".full-col-1-3").append('<img src="img/galeria/col-2-3.jpeg" alt="">');
      $(".full-col-1-4").append('<img src="img/galeria/col-2-4.jpeg" alt="">');
     }

     function creaColumna3() { 
      $(".full-col-1-1").append('<img src="img/galeria/col-3-1.jpeg" alt="">');
      $(".full-col-1-2").append('<img src="img/galeria/col-3-2.jpeg" alt="">');
      $(".full-col-1-3").append('<img src="img/galeria/col-3-3.jpeg" alt="">');
      $(".full-col-1-4").append('<img src="img/galeria/col-3-4.jpeg" alt="">');
     }

     function creaColumna4() { 
      $(".full-col-1-1").append('<img src="img/galeria/col-4-1.jpeg" alt="">');
      $(".full-col-1-2").append('<img src="img/galeria/col-4-2.jpeg" alt="">');
      $(".full-col-1-3").append('<img src="img/galeria/col-4-3.jpeg" alt="">');
      $(".full-col-1-4").append('<img src="img/galeria/col-4-4.jpeg" alt="">');
     }

    //muestra la imagen segun el cuadro clickeado

    if ($("#galeria-imagen1").hasClass("clicked")) { 
      creaColumna1();
     }
     else if ($("#galeria-imagen2").hasClass("clicked")) { 
      moverD();
      creaColumna1();
     }
     else if ($("#galeria-imagen3").hasClass("clicked")) { 
      creaColumna1();
      moverD();
      moverD();
     }
     else if ($("#galeria-imagen4").hasClass("clicked")) { 
      creaColumna1();
      moverD();
      moverD();
      moverD();
     }
     else if ($("#galeria-imagen5").hasClass("clicked")) { 
      creaColumna2();
     }
     else if ($("#galeria-imagen6").hasClass("clicked")) { 
      creaColumna2();
      moverD();
     }
     else if ($("#galeria-imagen7").hasClass("clicked")) { 
      creaColumna2();
      moverD();
      moverD();
     }
     else if ($("#galeria-imagen8").hasClass("clicked")) { 
      creaColumna2();
      moverD();
      moverD();
      moverD();
     }
     else if ($("#galeria-imagen9").hasClass("clicked")) { 
      creaColumna3();
     }
     else if ($("#galeria-imagen10").hasClass("clicked")) { 
      creaColumna3();
      moverD();
     }
     else if ($("#galeria-imagen11").hasClass("clicked")) { 
      creaColumna3();
      moverD();
      moverD();
     }
     else if ($("#galeria-imagen12").hasClass("clicked")) { 
      creaColumna3();
      moverD();
      moverD();
      moverD();
     }
     else if ($("#galeria-imagen13").hasClass("clicked")) { 
      creaColumna4();
     }
     else if ($("#galeria-imagen14").hasClass("clicked")) { 
      creaColumna4();
      moverD();
     }
     else if ($("#galeria-imagen15").hasClass("clicked")) { 
      creaColumna4();
      moverD();
      moverD();
     }
     else if ($("#galeria-imagen16").hasClass("clicked")) { 
      creaColumna4();
      moverD();
      moverD();
      moverD();
     }
     
     else { 
     }
     

  }, 1);

  //abre el background del fullscreen al hacer click en un cuadro de la galeria

  $(".galeria-fullscreen, .galeria-2").removeClass("off");
  $(".galeria-fullscreen, .galeria-2").addClass("on");

  //aparece la imagen con un retraso

  setTimeout(function () {
    $(".imagenfull").addClass("on");
  }, 2500);

  //aparece el texto y el boton de salir

  setTimeout(function () {
    //texto

    $(".textoimagenfull").addClass("on");

    //boton de salir

    $(".exit").addClass("on");
  }, 2700);

});

//funciones para desplazar el fullscreen con botones

function moverFull() {
  //almacenar slider en una variable//
  var sliderFull = $(".contenedor-imagenfull");
  //almacenar botones//
  var siguienteFull = $("#btn-next-full");
  var anteriorFull = $("#btn-prev-full");

  //mover ultima columna al primer lugar//

  $(".contenedor-imagenfull div:last").insertBefore(
    ".contenedor-imagenfull div:first"
  );

  sliderFull.css("margin-left", "-" + 100 + "%");

  // mover a la derecha

  function moverD() {
    // mueve el slider a la derecha


    sliderFull.animate({ "marginLeft": "-=100%" }, 900, function () {
      $(".contenedor-imagenfull div:first").insertAfter(
        ".contenedor-imagenfull div:last"
      );
      sliderFull.css("margin-left", "-" + 100 + "%");
    });
  }

  siguienteFull.on("click", function () {
    moverD();
  });

  // mover a la izquierda

  function moverI() {
    //mueve el slider a la izquierda

    sliderFull.animate({ "marginLeft": "+=100%" }, 900, function () {
      $(".contenedor-imagenfull div:last").insertBefore(
        ".contenedor-imagenfull div:first"
      );
      sliderFull.css("margin-left", "-" + 100 + "%");
    });
  }

  anteriorFull.on("click", function () {
    moverI();
  });
}

//llamada a la funcionb que mueve botones

moverFull();

//cierra el background

$(".exit").on("click", function () {

    $("#body-top > div.galeria-fullscreen.on > div > div > div.imagenfull.on > div.contenedor-imagenfull > div > span").remove();

  //elimina el contenido completo de la galeria//

  $(".galeria-fullscreen").addClass("off");

  //elimina la visibilidad de la imagen

  $(".imagenfull").removeClass("on");

  //elimina la visibiidad del texto

  $(".textoimagenfull").removeClass("on");

  //elimina la visibildiad del boton de salir

  $(".exit").removeClass("on");


  //vuelve la galeria a su orden inicial//

  setTimeout(function () {
    //almacenar slider en una variable//
    var sliderFull = $(".contenedor-imagenfull");


    //funcion para mover a la izquierda//
    function moverI() {
      //mueve el slider a la izquierda
  
      sliderFull.animate({ "marginLeft": "+=100%" }, 1, function () {
        $(".contenedor-imagenfull div:last").insertBefore(
          ".contenedor-imagenfull div:first"
        );
        sliderFull.css("margin-left", "-" + 100 + "%");
      });
    }

    


    //vuelve la imagen al primer cuadro segun el cuadro clickeado//

     if ($("#galeria-imagen2").hasClass("clicked") || $("#galeria-imagen6").hasClass("clicked") || $("#galeria-imagen10").hasClass("clicked") || $("#galeria-imagen14").hasClass("clicked")) { 
      moverI();
     }
     else if ($("#galeria-imagen3").hasClass("clicked") || $("#galeria-imagen7").hasClass("clicked") || $("#galeria-imagen11").hasClass("clicked") || $("#galeria-imagen15").hasClass("clicked")) { 
      moverI();
      moverI();
     }
     else if ($("#galeria-imagen4").hasClass("clicked") || $("#galeria-imagen8").hasClass("clicked") || $("#galeria-imagen12").hasClass("clicked") || $("#galeria-imagen16").hasClass("clicked")) { 
      moverI();
      moverI();
      moverI();
     }
     else { 
     }
     

  }, 500);


  //elimina la clase clicked en todos los elementos

  setTimeout(function () {
    $(".cuadro-galeria").removeClass("clicked");
  }, 700);

  
  
  
});

//--------------------------------------------------------//
//configuraciones del cambio de imagenes en el full screen//
//-------------------------------------------------------//
