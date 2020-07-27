const mongoose = require("mongoose");
const Schema = mongoose.Schema;

model = mongoose.model.bind(mongoose);

const slotSchema = new Schema({
  slot_time: { type: String, required: true },
  slot_date: { type: String, required: true },
  created_at: Date,
});
const Slot = model("Slot", slotSchema);

module.exports = Slot;
