const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ""
    },

    category: {
      type: String,
      default: "General"
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },

      coordinates: {
        type: [Number],
        required: true
      }
    },

    address: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

placeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", placeSchema);
