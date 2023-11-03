const mongoose = require('mongoose');

const { STUDENT } = require('../constants/roles');

const StudentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: STUDENT,
  },
  address: {
    type: String,
    default: '',
  },
  coverLetter: {
    type: String,
    default: '',
  },
  gender: {
    type: String,
    default: '',
  },
  resume: {
    type: String, // You can use String to store the file path or Buffer to store the content
    default: '', // Set a default value as needed
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model('Students', StudentSchema);
