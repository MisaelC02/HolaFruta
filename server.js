const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static('public'));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));



app.get("/", (req, res) => {

    res.render('File');
});
app.get("/hola", (req, res) => {

    res.render("Hello Word!");
});

app.listen(port, () => {
    console.log(`El puerto es  http://localhost:${port}`);
});
