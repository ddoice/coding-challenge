const mongoose = require("mongoose");
const mongoConfig = require("./config");
const debug = require('debug')('server:mongodb');

// this should be refactored into something cool
module.exports = {
    init: () => {
        mongoose.Promise = global.Promise;
        mongoose.set("useFindAndModify", false);
        const db = mongoose.connect(mongoConfig, { useNewUrlParser: true });
        mongoose.connection
            .on("error", (err) => {
                debug(
                    "Error: Could not connect to MongoDB. Did you forget to run `mongod`?",
                    err
                );
                debug("You need a MongoDB to run this app: docker run -d -p 27017:27017 -v ~/data:/data/db mongo")
            })
            .on("open", () => {
                debug("Connection extablised with MongoDB");
            });
        return db;
    }
};
