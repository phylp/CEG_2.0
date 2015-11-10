module.exports = function(app){
  require('./news')(app);
  require('./sports')(app);
}