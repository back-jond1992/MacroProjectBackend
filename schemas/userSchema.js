const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log(process.env.NODE_ENV);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    BMR: {
      type: Number,
      required: true,
    },
    TDEE: {
      type: Number,
      required: true,
    },
    maintenance: {
      type: Number,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ENV = process.env.NODE_ENV;

console.log(ENV);

const User = mongoose.model(`${ENV}_user`, userSchema);

module.exports = User;
