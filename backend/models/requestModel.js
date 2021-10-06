const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  request_text: {
    type: String,
    required: true,
  },
  department_names: {
    type: String,
    required: true,
  },
  request_due_date: {
    type: String,
    required: true,
  },
  expiration_date: {
    type: String,
    required: true,
  },
  requester: {
    type: String,
    required: true,
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
