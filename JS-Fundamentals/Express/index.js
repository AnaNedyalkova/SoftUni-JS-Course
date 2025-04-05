const express = require('express');
const app = express();
const port = 3300;
const bodyParser = require("body-parser");
const homeController = require("./src/controllers/home");
const {aboutController} = require("./src/controllers/about");
//configuration for handlebars
const handleBars = require("express-handlebars");
const hbs = handleBars.create({extname: "hbs"}) // казваме какво е разширението
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
//
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log('Server is running'));
let counter = 0;

app.get('/', homeController.home)


app.get('/about', aboutController)

app.get("/create", (req, res) => {
    const html = `
    <h1> Create </h1>
        <form action "/create" method = "post">
            <input type = "text" name = "productName" />
            <input type ="number" name = "productPrice" />
            <input type = "Submit" value = "Submit" />
            </form>`;
    res.send(html);
});

app.post("/create", (req, res) => {
    console.log(req.body);

})

const product = [
    { name: "Fransis", age: 10 },
    { name: "Buch", age: 15 },
    { name: "Rosho", age: 3 },
]
app.get("/catalog", (req, res) => {
    const html = `
    <h1> Catalog </h1>
    <ul> 
    ${product.map((e, i) => `<li> <a href=/catalog/${i}> ${e.name} </a></li>`)}
    </ul>
`
res.send(html);
})

app.get("/catalog/:id", (req, res) => {
    const html = `<h1> Details </h1>`
    res.send(html);
})