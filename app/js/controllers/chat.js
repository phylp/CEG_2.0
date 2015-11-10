module.exports = function(app){
  app.controller('chat', ['$scope', function($scope){
    $scope.main = function(){
      var socket = io();
      $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });
    };
  }]);
}