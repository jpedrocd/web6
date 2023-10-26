let express = require('express');

let app = express();
module.exports = app;
let port = 3000;

app.set("views", "./app/views");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

app.listen(port, function(){
    console.log('Porta -> ', port);
});

