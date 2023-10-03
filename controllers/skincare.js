const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllSkincare = async (req, res) => {
    //#swagger-tags=['skincare']
    console.log(mongodb);
    console.log("it worked");
    const result = await mongodb.getDatabase().db().collection('skincare').find();
    console.log(result);
    result.toArray().then((skincare) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(skincare);
    });

}
// skincare

const getSingleSkincare = async (req, res) => {
    //#swagger-tags=['skincare']
    const SkincareId = new ObjectId(req.ObjectId);
    const result = await mongodb.getDatabase().db().collection('skincare').find({ _id: SkincareId });
    result.toArray().then((skincare) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(skincare[0]);
    });
};

const createSkincare = async (req, res) => {
    //#swagger-tags=['skincare']
    const Skincare = {
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        description: req.body.description,
        brand: req.body.brand,
        rating: req.body.rating,
    };
    const response = await mongodb.getDatabase().db().collection('skincare').replaceOne({ _id: SkincareId });
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while updating the Skincare');
    }
};

const updateSkincare = async (req, res) => {
    //#swagger-tags=['skincare']
    const SkincareId = new ObjectId(req.params.id);
    const Skincare = {
        name: req.body.name,
        price: req.body.price,
        ipaddress: req.body.ipaddress
    };
    const response = await mongodb.getDatabase().db().collection('skincare').replaceOne({ _id: SkincareId }, Skincare);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while updating the Skincare');
    }
};

const deleteSkincare = async (req, res) => {
    //#swagger-tags=['skincare']
    const SkincareId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('skincare').remove({ _id: SkincareId }, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the Makeup');
    }
};

module.exports = {
    getAllSkincare,
    getSingleSkincare,
    createSkincare,
    updateSkincare,
    deleteSkincare
}