const mongo = require('../connect');
const randomstring = require("randomstring");
const { ObjectId } = require('mongodb');
//creating a data
module.exports.createsQurey = async (req, res, next) => {

    try {

        const insertedResponse = await mongo.selectedDb.collection("Qurey").insertOne({
            studentid: req.body.currentUser._id,
            studentemail: req.body.currentUser.email,
            QureyNO: randomstring.generate(6),
            ...req.body.data
        });

        res.send(insertedResponse);
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

//get data module
module.exports.getQurey = async (req, res, next) => {
    try {
        const staffdata = await mongo.selectedDb.collection("Qurey").find({ studentid: req.body.currentUser._id }).toArray();
        res.send(staffdata);
       
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
}

//update data module
module.exports.updateQurey = async (req, res, next) => {
    try {
console.log(req.body);
        const updatedData = await mongo.selectedDb.collection("Qurey")
            .findOneAndUpdate({ _id: ObjectId(req.params.id) },
                { $set: { "mentor": req.body.mentor } },
                { returnDocument: "after" });

        res.send(updatedData);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}
//delete data module
module.exports.deleteQurey = async (req, res, next) => {
    try {

        const id = req.params.id;
        const deletedData = await mongo.selectedDb.collection("Qurey").deleteOne({ _id: ObjectId(id) });
        res.send(deletedData)
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
}
