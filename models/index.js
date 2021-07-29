const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

//Connect to database
const mongooseConnect =mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error(err);
  });

const article = require("./article");
const comment = require("./comment");
module.exports = { comment, article, mongooseConnect };
