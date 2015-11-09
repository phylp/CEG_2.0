module.exports = function(app){
  require('./news_controller')(app);
  //require('.sports_controller')(app);
  require('./welcome')(app) 
}