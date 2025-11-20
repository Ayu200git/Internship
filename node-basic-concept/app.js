 const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const expressHbs = require("express-handlebars");

const app = express();

app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
// app.set("view engine", "pug");   for set view engine with  pug templeting.
app.set("views", "views");

// Routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // FIX: serve CSS files

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// 404 Page
app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
res.status(404).render("404page");
});

app.listen(3000);
