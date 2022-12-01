const express = require('express');
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
const Sequelize = require("sequelize");


app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.render("home")
});

app.get("/cad", function (req, res) {
    res.render("formulario")
});

app.post("/add", function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        //res.send("Post criado com sucesso")
        res.redirect("/")
    }).catch(function (erro) {
        res.send("Houve um erro:" + erro)
    })
});

app.listen(8090, function () {
    console.log(" Servidor rodando no localhost:8090 ");
});