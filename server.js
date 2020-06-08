// Dependencies
// =============================================================
var express = require("express");
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiroutes);
app.use("/", htmlroutes);
// Sets up the Express app to handle data parsing -MIDWARE


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
