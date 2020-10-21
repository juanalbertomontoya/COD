//almacenar slider en una variable//
var slider = $("#contenido-galeria");
//almacenar botones//
var siguiente = $("#btn-next");
var anterior = $("#btn-prev");

//duplicar las columnas

$("section").clone().appendTo("#contenido-galeria");

//oculta las columnas por venir
$("#contenido-galeria section:nth-child(5)").addClass("off");
$("#contenido-galeria section:nth-child(6)").addClass("off");
$("#contenido-galeria section:nth-child(7)").addClass("off");
$("#contenido-galeria section:nth-child(8)").addClass("off");

//mover ultima columna al primer lugar//

$("#contenido-galeria section:last").insertBefore(
  "#contenido-galeria section:first"
);

slider.css("margin-left", "-" + 140 + "px");

// mover a la derecha

function moverD() {
  //oculta la primera columna

  $("#contenido-galeria section:nth-child(2)").addClass("off");

  //aparece la siguiente columna

  $("#contenido-galeria section:nth-child(5)").removeClass("off");

  //mantiene todas las columans visibles

  $("#contenido-galeria section:nth-child(5)").removeClass("off");

  // mueve el slider a la derecha
  slider.animate({ marginLeft: "-" + 280 + "px" }, 700, function () {
    $("#contenido-galeria section:first").insertAfter(
      "#contenido-galeria section:last"
    );
    slider.css("margin-left", "-" + 140 + "px");
  });

  //mantiene todas las columans visibles

  $("#contenido-galeria section:nth-child(3)").removeClass("off");
  $("#contenido-galeria section:nth-child(4)").removeClass("off");
}

siguiente.on("click", function () {
  moverD();
});

// mover a la izquierda

function moverI() {
  //oculta la tercera columna

  $("#contenido-galeria section:nth-child(4)").addClass("off");

  //aparece la siguiente columna

  $("#contenido-galeria section:nth-child(1)").removeClass("off");

  //mueve el slider a la izquierda

  slider.animate({ marginLeft: 0 }, 700, function () {
    $("#contenido-galeria section:last").insertBefore(
      "#contenido-galeria section:first"
    );
    slider.css("margin-left", "-" + 140 + "px");
  });

  //mantiene todas las columans visibles

  $("#contenido-galeria section:nth-child(2)").removeClass("off");
  $("#contenido-galeria section:nth-child(3)").removeClass("off");
}

anterior.on("click", function () {
  moverI();
});
