const mongoose = require("mongoose");

const toolSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    pictures: [
      {
        type: String,
      },
    ],
    available: {
      type: Boolean,
      default: true,
    },
    view: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    renters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
    bannedAt: [
      {
        type: Date,
      },
    ],
    unbannedAt: [
      {
        type: Date,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Tool", toolSchema);
