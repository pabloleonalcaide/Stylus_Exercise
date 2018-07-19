$(document).ready(main);
 
var counter = true;
 
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
		if(counter){
			showNav();
		} else {
			hideNav();
		}
 	$('.navLink').click(hideNav) 
 	$('main').click(hideNav)
 	$(document).keypress(function(e){
 		if(e.keyCode === 27)
 			hideNav();
 	});
});
	
 let hideNav =()=>{
 	counter = true;
		$('nav').animate({ left: '-100%' });
		$('.underline').css({
            transition : 'color 1s ease-in-out',
                         "color": "#000"
           });
 }
 
 let showNav = ()=>{
 	$('nav').animate({ left: '0' });
	$('.underline').css({
                transition : 'color 1s ease-in-out',
                "color": "#1BB1F5"
            });
	counter = false;
 }

};
