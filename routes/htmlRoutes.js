// reads in path package
const path = require("path");

module.exports = function(app) {

    // sends notes.html page upon /notes url request
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // sends index.html page upon any other url request
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}