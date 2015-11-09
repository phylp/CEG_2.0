module.exports = function(app){
  app.controller('welcome', ['$scope', function($scope){
    $scope.main = function(){
      $('.icon-menu').hide();

      $('.myButton').click(function() {
        $('.menu').animate({
          left: "0px"
        }, 200);
        $('.icon-menu').hide(); 
       });

      $('.icon-close').click(function() {
        $('.menu').animate({
          left: "-285px"
        }, 200);

        $('body').animate({
          left: "0px"
        }, 200);
      });    
  
      // $('.welcometxt').hide();
      // $('.myButton').hide();
      $(window).load(function(){
        $('.welcometxt').fadeIn(2000);
        $('.myButton').fadeIn(2000);
      });
    }
  }]);
}