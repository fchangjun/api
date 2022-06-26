const { model, Schema } = require("mongoose");

let versionScheme = Schema({
  __v: { type: Number, select: false },

  forceState: { type: Boolean, default: false },

  checkState: { type: Boolean, default: false },
});

let versionModel = model("version", versionScheme);
module.exports = versionModel;
