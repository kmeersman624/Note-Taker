var router = require("express").Router();
var fs = require("fs");
var path = require("path");
var uniqueID = require("uuid")
var filePath = path.join(__dirname, "../db/db.json")
//GET /api/notes - Should read the db.json file and return all saved notes as JSON.
router.get("/notes", function (req, res) {
  res.sendFile(filePath);
});

// router.get("/api/notes/:id", function (req, res) {
  //   res.json(savedNotes[Number(req.params.id)]);
  // });
  
  //POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
  router.post("/notes", function (req, res) {
  fs.readFile(filePath, "utf8", function (err, data) {
    const notes = JSON.parse(data);
    uniqueID = 
    notes.push(req.body);
    fs.writeFile(filePath, JSON.stringify(notes), function (err) {
      res.json(true)
    })
  });
 
});

//DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. (UUID)
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete("/notes/:id", function (req, res) {


  // fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
  // res.json(savedNotes);
});

module.exports = router;
