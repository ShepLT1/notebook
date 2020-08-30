// reads in db.json object
const notes = require("../db/db.json");

// reads in uuid npm package for creating unique IDs
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {

    // Returns db.json object
    app.get("/api/notes", function(req, res) {
        return res.json(notes)
    });
    
    // Posts new notes with unique IDs to db.json object and responds with updated db.json object
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        res.json(notes);
    })

    // Deletes desired note from db.json object based on unique ID
    app.delete("/api/notes/:id", function(req, res) {
        let id = req.params.id;
        for (var i = 0; i < notes.length; i++) {
            if (id === notes[i].id) {
                 notes.splice(i, 1);
            }
        }
        res.send();
    })
}