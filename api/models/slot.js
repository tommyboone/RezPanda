let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const slotSchema = new Schema({
  slot_time: { type: String, required: true },
  slot_date: { type: String, required: true },
  created_at: Date,
});
let Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
