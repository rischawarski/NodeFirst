const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Conector db
const connection = require('./database/connector');

//engine renderização
app.set('view engine', 'ejs');

//static CSS JS ...
app.use(express.static('public'));

//formularios html
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//conect
connection
    .authenticate()
    .then(()=>{
        console.log("Database --ok!")
    }).catch((error)=>{
        console.log(error);
    });


app.get('/', (req, res) => {
    //res.send("Ola Richardson");
    res.render("index");
});

app.listen(4000, () => {
    console.log(`Server started on 4000`);
});