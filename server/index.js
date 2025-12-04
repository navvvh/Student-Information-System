const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./middleware/dbConnection");
const jsonParser = bodyParser.json();
const studentRoutes = require("./controller/studentRoutes");

app.use(cors());
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true }));

dbConnect();

app.use("/user", studentRoutes);

app.listen(port, err => {
    if (err) return console.log(err);
    console.log("server running on port:", port);
});