const database = require("../models/index");

console.log(database.url);

let connectedToDB = false;

async function connectToDB() {
    if (connectedToDB) {
        return;
    }
    await database.mongoose
        .connect(database.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Connected to the database!");
            connectedToDB = true;
        });
}

// Upload objects to database
async function queryUpload(puzzles, collection) {
    await module.exports.connectToDB();
    return await collection.insertMany(puzzles, { ordered: false });
}

async function querySearchAND(filterValues, collection) {
    await module.exports.connectToDB();
    return await collection.find({ $and : filterValues });
}

async function queryUpdate(searchCriteria, replaceCriteria, collection){
    await module.exports.connectToDB();
    return await collection.updateMany({ $and : searchCriteria }, { $set: replaceCriteria } );
}

async function queryDeleteAND(filterValues, collection) {
    await module.exports.connectToDB();
    return await collection.deleteMany({ $and : filterValues });
}

module.exports = { queryUpload: queryUpload, connectToDB, querySearchAND: querySearchAND, queryUpdate: queryUpdate, queryDeleteAND: queryDeleteAND };