const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema(
  {
    title: String,
    desc: String,
  },
  { collection: "Notes" }
);


const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
