const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    img: Buffer,
    name: String,
    type: String,
},{collection:"data"})

module.exports = mongoose.model("data", dataSchema);