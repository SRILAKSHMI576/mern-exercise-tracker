const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  //automatically created and when it was modified
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
