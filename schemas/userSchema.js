const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ENV = process.env.NODE_ENV;

const User = mongoose.model(`${ENV}_user`, userSchema);

module.exports = User;
