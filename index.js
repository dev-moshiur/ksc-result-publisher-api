const express = require("express");
const mongoose = require("mongoose");

// const multer = require('multer')
const cors = require("cors");

const { router } = require("./view/clientReq");
const { user } = require("./view/user");

const app = express();
dotenv.config();
const port = process.env.PORT || 5001;

const uri = process.env.URI

// const UPLOAD_FOLDER='./uploads/';
app.use(express.json());
app.use(cors());

app.use("/result", router);
app.use("/user", user);

mongoose
  .connect(uri)
  .then(() => console.log("DB is connected mow"))
  .catch((err) => console.log("Not Connected", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
