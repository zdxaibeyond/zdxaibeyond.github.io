$(function(){
$('.clear').mouseenter(function(){
	$(this).find('i').animate({top:"-25px",opacity:"0"},300,function(){
		$(this).css({top:"30px"});
		$(this).animate({top:"15px",opacity:"1"},200)
		})
	}) 
})