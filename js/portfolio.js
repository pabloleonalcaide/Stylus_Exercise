$(document).ready(main);
 
var contador = true;
 
function main(){
	$('#menuLink').click(function(event){
		event.preventDefault();
          $(this).hide().show("slide", { direction: "left" }, 1000);
//		$(this).slideUp(400).delay(1000).slideDown(400);
		if(contador){
			mostrar();
		} else {
			ocultar();
		}

 	$('.navLink').click(ocultar) 
 	$('main').click(ocultar)
	});

 let ocultar =()=>{
 	contador = true;
		$('nav').animate({
			left: '-100%'
		});
		$('.underline').css({
            transition : 'color 1s ease-in-out',
                         "color": "#000"
           });

 }
 let mostrar = ()=>{
 	$('nav').animate({
		left: '0'
	});
	$('.underline').css({
                transition : 'color 1s ease-in-out',
                "color": "#1BB1F5"
            });
	contador = false;
 }
};