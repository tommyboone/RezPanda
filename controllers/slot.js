let db = require("../models");

module.exports = {
  all: function (req, res) {
    db.Slot.find({}).exec((err, slots) => res.json(slots));
  },
};
