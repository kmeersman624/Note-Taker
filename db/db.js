const util = require("util");
const fs = require("fs");
// const uniqueID = require('uuidv1');
const uuidv1 = require('uuidv1');
const readData = util.promisify(fs.readFile);
const writeData = util.promisify(fs.writeFile);

class Db{
read () {
    return readData("db/db.json, utf8");
}
write (note) {
return writeData("db/db.json", JSON.stringify(note));
}
getNote () {
    return this.read().then(notes => {
        let parseNote; 
        try {
            parseNote = [].concat(JSON.parse(notes));
        }
        catch (err) {
            parseNote = [];
        }
        return parseNote;
    });
}
addNote (note) {
    const {title, text} = note; //means db.json has title and text in its object
    const newNote = {title, text, id: uuidv1()};
    return this.getNote().then(notes => [...notes, newNote]).then(writeNote => this.write(newNote))
    .then(() => (newNote));
}
}
module.exports= new Db();