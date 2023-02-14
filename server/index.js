const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRouter = require("./Routes/dataRoutes");
const fileupload = require("express-fileupload");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(fileupload());
app.use("/api/", dataRouter)

mongoose.connect(process.env.MONGO).then(() => {
    app.listen("4000", () => {
        console.log("listening at port 4000");
    })
})