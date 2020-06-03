// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing -MIDWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

//GET /notes - Should return the notes.html file.
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  //GET * - Should return the index.html file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
//GET /api/notes - Should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

//POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    res.json(newNote);
});

//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. (UUID) 
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
app.delete("/api/notes/:id", function(req, res) {

})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });