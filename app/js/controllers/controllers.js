module.exports = function(app){
  require('./news_controller')(app);
  require('./welcome')(app);
  require('./games')(app);
  require('./chat')(app); 
}