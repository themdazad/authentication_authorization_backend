const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  post:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ]
});

module.exports = mongoose.model("post", userSchema);
