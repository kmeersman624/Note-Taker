// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlroutes);
app.use("/api", apiroutes);
// Sets up the Express app to handle data parsing -MIDWARE

//GET * - Should return the index.html file
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
