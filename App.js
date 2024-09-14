const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const ArticleModel = require("./model/ArticleModel");
//set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//set route
app.get("/article", ArticleModel.getArticle);
app.post("/article/add", ArticleModel.createArticle);
app.put("/article/edit/:id", ArticleModel.updateArticle);
app.delete("/article/delete/:id", ArticleModel.deleteArticle);
//port server
app.listen(PORT, () => console.log(`server berjalan di port: ${PORT}`));
