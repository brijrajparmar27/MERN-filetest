const express = require("express");
const dataRouter = express.Router()
const datamodel = require("../Schema/dataSchema");

dataRouter.get("/", async (req, res) => {
    const data = await datamodel.find({}, {
        _id: 1, img: 0,
        name: 0,
        type: 0,
    });
    res.json(data)
})

dataRouter.post("/", async (req, res) => {
    const response = await datamodel.create({
        img: req.files.file.data,
        name: req.files.file.name,
        type: req.files.file.mimetype
    })
    res.json(response).status(200)
})

dataRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    const data = await datamodel.findById(id);

    // res.setHeader("Content-Description", "File Transfer");
    // res.setHeader(
    //     "Content-Disposition",
    //     "attachment;filename=" + data.name
    // );

    res.send(data.img)

})

dataRouter.delete("/:id", (req, res) => {
    res.json({ message: "delete data" })
})

module.exports = dataRouter