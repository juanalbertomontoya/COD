
//animacion de la barra verde

$('#menu-somos').hover(
  
  function(){ 
    $('#barra1').toggleClass('on');
    $('.menu-elemento').toggleClass('on');
  
}
)

$('#menu-servicios').hover(
  
  function(){ $('#barra2').toggleClass('on');
  $('.menu-elemento').toggleClass('on');
  
}
)

$('#menu-contactanos').hover(
  
  function(){ $('#barra3').toggleClass('on');
  $('.menu-elemento').toggleClass('on');
  
}
)

