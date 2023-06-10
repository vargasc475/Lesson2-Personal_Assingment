const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const findOneDocument = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.databaseConnected().db("cse341").collection("Contacts").find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
        console.log(lists);
    });
  
}
  
const findAllDocuments = async (req, res, next) => {
    const result = await mongodb.databaseConnected().db("cse341").collection("Contacts").find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });

}

module.exports = {
    findOneDocument, 
    findAllDocuments
};