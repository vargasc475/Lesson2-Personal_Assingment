const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const findOneDocument = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.databaseConnected().db("cse341").collection("Contacts").find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
  
}
  
const findAllDocuments = async (req, res) => {
    const result = await mongodb.databaseConnected().db("cse341").collection("Contacts").find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });

}

const newDocument = async (req, res) => {

    const newColl = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday 
    };

    // const newColl = {
    //     "firstName": "ken",
    //     "lastName": "clark",
    //     "email": "vfndksvfbdsjk",
    //     "favoriteColor": "Red",
    //     "birthday": "25 June"  
    // };
    console.log(newColl);

    const result = await mongodb.databaseConnected().db('cse341').collection('Contacts').insertOne(newColl);
    if(result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || 'It seems to be an error creating a new collection.');
    }
};

const updateDocument = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const newData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday 
    };
    const result = await mongodb.databaseConnected().db('cse341').collection('Contacts').replaceOne({ _id: userId }, newData);
    console.log(result);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'It seems to be an error creating a new collection.');
    }

}

const deleteDocument = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const result = await mongodb.databaseConnected().db('cse341').collection('Contacts').deleteOne({ _id: userId });
    console.log(result);
    if (result.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(result.error || 'The data could not be deleted.');
    }
}

module.exports = {
    findOneDocument, 
    findAllDocuments,
    newDocument,
    updateDocument,
    deleteDocument
};