$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
    $(window).resize(function(){
       $(window).scroll(); 
    });
    
	$(window).scroll(function(){
        
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
        if ($(this).scrollTop() > 53) {
            if($(window).width()<992){
               
                $('.hoverMenu').fadeIn();
            }
            else{
                $('.hoverMenu').fadeOut();
            }
			
        } 
        else {
			$('.hoverMenu').fadeOut();
        }
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    $('.hoverMenu').click(function(){
		w3_open();
		//return false;
	});
    
	
});