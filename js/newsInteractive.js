var main = function(){      
    
  /* --------------- MENU -------------------- */
    
  /* Push the nav over by 285px over */
  $('.icon-menu').click(function() {
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
    
    /*----------------- FADE IN LOGO ----------------*/
    
  
    $('.welcometxt').hide();
    $('.myButton').hide();
    $(window).load(function(){
        $('.welcometxt').fadeIn(3000);
        $('.myButton').fadeIn(3000);
    });

   /*--------------- HIDE AND SHOW CONTENT ------------*/

    $('#sportsBlock').hide();
    $('#weatherBlock').hide();
    
    $('.sportsButton').click(function() {
        $('#newsBlock').hide();
        $('#sportsBlock').fadeIn(400);
        $('#weatherBlock').hide();    
        
    });
    
    $('.newsButton').click(function() {
        $('#sportsBlock').hide();
        $('#newsBlock').fadeIn(400);
        $('#weatherBlock').hide();    
    });

    $('.weatherButton').click(function() {
        $('#sportsBlock').hide();
        $('#newsBlock').hide();
        $('#weatherBlock').fadeIn(700);
    });
    
   /*--------------- WEATHER ------------*/
    
    $(".btn").click(function() {
        loadWeather(location); //@params location, woeid
    });
    

    function loadWeather(location, woeid) {
      $.simpleWeather({
        location: $("input").val(),
        woeid: woeid,
        unit: 'f',
        success: function(weather) {
          html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
          html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
          html += '<li class="currently">'+weather.currently+'</li>';
          $("#weather").html(html);
          },
        error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
        }
      });
    }
}


$(document).ready(main);