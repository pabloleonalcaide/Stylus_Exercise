$(document).ready(main);
 
var contador = true;
 
function main(){
	$('#projects a').mouseover(function(event){
		$('#projects').css({'backgroundColor' : '#dddddd'})
	});
	$('#projects a').mouseleave(function(event){
		$('#projects').css({'backgroundColor' : '#f4f4f4'})
	});
	$('#menuLink').click(function(event){
		event.preventDefault();
          $(this).hide().show("slide", { direction: "left" }, 1000);
		if(contador){
			mostrarNav();
		} else {
			ocultarNav();
		}
 	//oculta el nav si hace click en el resto de la página, en el icono del menu desplegable o si pulsa la tecla de escape
 	$('.navLink').click(ocultarNav) 
 	$('main').click(ocultarNav)
 	$(document).keypress(function(e){
 		if(e.keyCode === 27)
 			ocultarNav();
 	});
	});
/**
* oculta la barra de navegación
*/
 let ocultarNav =()=>{
 	contador = true;
		$('nav').animate({
			left: '-100%'
		});
		$('.underline').css({
            transition : 'color 1s ease-in-out',
                         "color": "#000"
           });

 }
 /**
 * muestra la barra de navegación
 */
 let mostrarNav = ()=>{
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