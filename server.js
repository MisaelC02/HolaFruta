const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('public'));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

let frutas = 
[{Fruta:"Manzana", Tipo: "Fruta", Stock: "true"}, 
{Fruta: "Banana", Tipo: "Fruta", Stock:"true"},
{Fruta: "Pera", Tipo: "Fruta", Stock:"False"}];

app.get("/", (req, res) => {

    res.render('prueba');
});


app.listen(port, () => {
    console.log(`El puerto es  http://localhost:${port}`);
});
