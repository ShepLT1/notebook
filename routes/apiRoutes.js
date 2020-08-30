const notes = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        return res.json(notes)
    });
    
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        newNote.id = uuidv4();
        notes.push(newNote);
        res.json(notes);
    })

    app.delete("/api/notes/:id", function(req, res) {
        let id = req.params.id;
        for (var i = 0; i < notes.length; i++) {
            if (id === notes[i].id) {
                 notes.splice(i, 1);
            }
        }
        res.send(id + "deleted");
    })
}