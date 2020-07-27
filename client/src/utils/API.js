import axios from "axios";

export default {
  all: function () {
    return axios.get("api/retreiveSlots");
  },
  create: function (data) {
    return axios.post("api/appointmentCreate", data);
  },
};
