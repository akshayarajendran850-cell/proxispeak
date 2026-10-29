const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ""
    },

    audioUrl: {
      type: String,
      required: true
    },

    duration: {
      type: Number,
      default: 0
    },

    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
      required: true
    },

    language: {
      type: String,
      default: "English"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Story", storySchema);
