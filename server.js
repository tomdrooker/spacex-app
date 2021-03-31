const express = require("express");
const app = express();

module.exports = app;

const PORT = process.env.port || 4001;

const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const appRouter = require("./routes/app-routes");
app.use("/", appRouter);

const hbs = require("express-handlebars");
app.engine("hbs", hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/" 
}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });