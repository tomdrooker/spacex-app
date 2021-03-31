const express = require('express');
const appRouter = express.Router();
const { fetchData } = require("../public/javascripts/utils");

appRouter.get("/", (req, res, next) => {
    console.log(fetchData());
    res.render("index", {title: "Welcome!", data: fetchData})
});

module.exports = appRouter;