const db = require("../models");
const Slot = require("../models/slot");
const Nexmo = require("nexmo");
const Appointment = require("../models/appointment");

module.exports = {
  all: function (req, res) {
    // Returns all appointments
    db.Appointment.find({}).exec((err, appointments) => res.json(appointments));
  },
  create: function (req, res) {
    var requestBody = req.body;
    var newslot = new Slot({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date,
      created_at: Date.now(),
    });
    newslot.save();
    // Creates a new record from a submitted form
    var newappointment = new Appointment({
      name: requestBody.name,
      email: requestBody.email,
      phone: requestBody.phone,
      slots: newslot._id,
    });
    const nexmo = new Nexmo({
      apiKey: "1f1690f7",
      apiSecret: "MNX1LpJPSD9J1P6H",
    });
    let msg =
      requestBody.name +
      " " +
      "this message is to confirm your appointment at" +
      " " +
      requestBody.appointment;
    // and saves the record to
    // the data base
    newappointment.save((err, saved) => {
      // Returns the saved appointment
      // after a successful save
      db.Appointment.find({ _id: saved._id })
        .populate("slots")
        .exec((err, appointment) => res.json(appointment));
      const from = "15404465104";
      const to = "19193904006";
      nexmo.message.sendSms(from, to, msg, (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      });
    });
  },
};
