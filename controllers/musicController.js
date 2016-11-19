'use strict';

const fs = require('fs');
const path = require('path');



exports.getSong = function(req, res) {
    let path = "music/" + req.params.directory;

    console.log(path);
    fs.readdir(path, function(err, items) {
        if (err) {
            return res.status(404).send({
                error: "directory does not exists"
            });
        }
        let index = Math.floor((Math.random() * items.length));
        let song = items[index];
        var stream = fs.createReadStream(path + "/" + song);
        stream.pipe(res);
    });
};


exports.home = function(req, res) {

    let path = "music";

    console.log(path);
    fs.readdir(path, function(err, items) {
        if (err) {
            return res.status(404).send({
                error: "directory does not exists"
            });
        }
        console.log(items);
        res.render('./index.ejs', {
            directories: items
        });
    });

};
