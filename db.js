var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GROWDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

  console.log("CONECTADO BASE DE DADOS");
});

var postSchema = mongoose.Schema({
    title: String
    ,text : String
})

var POSTE = mongoose.model('poste', postSchema);