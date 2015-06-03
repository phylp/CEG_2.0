var main = function(){
    
            
    
    /* --------------- MENU -------------------- */
    
  /* Push the body and the nav over by 285px over */
  $('.myButton').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);
    $('.icon-menu').hide(); 
   });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    $('.icon-menu').show();
  });
    
    /* ---------------- FADE IN LOGO ---------------- */
    
  
    $('.welcometxt').hide();
    $('.myButton').hide();
    $(window).load(function(){
        $('.welcometxt').fadeIn(3000);
        $('.myButton').fadeIn(3000);
    });
}

$(document).ready(main);