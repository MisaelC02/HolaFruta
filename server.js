const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let frutas = [
    { Fruta: "Manzana", Tipo: "Fruta", Stock: "true", Ruta: "img/manzana.jpg" },
    { Fruta: "Banana", Tipo: "Fruta", Stock: "true", Ruta: "img/Banana.jpg" },
    { Fruta: "Pera", Tipo: "Fruta", Stock: "false", Ruta: "img/Pera.jpg" },
    { Fruta: "Sandia", Tipo: "Fruta", Stock: "true", Ruta: "img/Sandia.jpg" },
    {
        Fruta: "Frutilla",
        Tipo: "Fruta",
        Stock: "false",
        Ruta: "img/Frutilla.jpg",
    },
    { Fruta: "Uva", Tipo: "Fruta", Stock: "true", Ruta: "img/Uva.jpg" },
    { Fruta: "Naranja", Tipo: "Fruta", Stock: "false", Ruta: "img/Naranja.jpg" }
];
let largo = frutas.length;

app.get("/verduleria", (req, res) => {
    res.render("File", { frutas: frutas, largo: largo });
});

app.listen(port, () => {
    console.log(`El puerto es  http://localhost:${port}`);
});
