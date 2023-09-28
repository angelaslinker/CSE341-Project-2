const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger-tags=['Makeup']
    console.log(mongodb);
    console.log("it worked");
    const result = await mongodb.getDatabase().db().collection('makeup').find();
    console.log(result);
    result.toArray().then((makeup) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(makeup);
    });

}

const getSingle = async (req, res) => {
    //#swagger-tags=['makeup']
    const MakeupId = new ObjectId(req.ObjectId);
    const result = await mongodb.getDatabase().db().collection('makeup').find({ _id: MakeupId });
    result.toArray().then((makeup) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(makeup[0]);
    });
};

const createMakeup = async (req, res) => {
    //#swagger-tags=['makeup']
    const Makeup = {
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        description: req.body.description,
        brand: req.body.brand,
        rating: req.body.rating,
        shades: req.body.shade,
    };
    const response = await mongodb.getDatabase().db().collection('makeup').replaceOne({ _id: MakeupId });
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while updating the Makeup');
    }
};

const updateMakeup = async (req, res) => {
    //#swagger-tags=['makeup']
    const MakeupId = new ObjectId(req.params.id);
    const Makeup = {
        name: req.body.name,
        price: req.body.price,
        ipaddress: req.body.ipaddress
    };
    const response = await mongodb.getDatabase().db().collection('makeup').replaceOne({ _id: MakeupId }, Makeup);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while updating the Makeup');
    }
};

const deleteMakeup = async (req, res) => {
    //#swagger-tags=['makeup']
    const MakeupId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('makeup').remove({ _id: MakeupId }, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the Makeup');
    }
};

module.exports = {
    getAll,
    getSingle,
    createMakeup,
    updateMakeup,
    deleteMakeup
};