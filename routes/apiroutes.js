var router = require("express").Router();
var fs = require("fs");
var path = require("path");
var savedNotes = JSON.parse(fs.readFileSync("/db/db.json", "utf8"));

//GET /api/notes - Should read the db.json file and return all saved notes as JSON.
router.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

router.get("/api/notes/:id", function (req, res) {
  res.json(savedNotes[Number(req.params.id)]);
});
//POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post("/api/notes", function (req, res) {
  var newNote = req.body;
  var uniqueId = savedNotes.length.toString();
  newNoteId = uniqueId;
  savedNotes.push(newNote);
  console.log("saved to db.json", newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));

  res.json(savedNotes);
});

//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. (UUID)
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete("/api/notes/:id", function (req, res) {});

module.exports = router;
