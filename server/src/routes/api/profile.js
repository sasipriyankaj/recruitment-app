const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');
const Admin = require('../../models/Admin');
const Company = require('../../models/Company');
const Student = require('../../models/Student');
const { ADMIN, COMPANY, STUDENT } = require('../../constants/roles');
const multer = require('multer');
const mongoose = require('mongoose');

// Set up multer storage to store files in memory as binary data
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define the route for resume upload
router.post('/uploadResume', authorization, upload.single('resume'), (req, res) => {
  const { _id, role } = req.user;

  if (role === STUDENT) {
    const resumeData = req.file.buffer;

    // Update the Student document with the resume information
    Student.updateOne({ _id }, { $set: { resume: resumeData } })
      .then(success => res.status(200).send(success.nModified))
      .catch(error => res.status(400).send({ message: error.message }));
  } else {
    res.status(400).send({ message: 'Invalid role for resume upload' });
  }
});

// Define the route for fetching user profiles
router.get('/', authorization, (req, res) => {
  const { _id, role } = req.user;
  let User;

  if (role === ADMIN) {
    User = Admin;
  } else if (role === COMPANY) {
    User = Company;
  } else if (role === STUDENT) {
    User = Student;
  }

  if (User) {
    User.findById(_id)
      .then(data => {
        if (data) {
          const user = data.toObject();
          delete user.password;
          res.status(200).send(user);
        } else {
          res.status(404).send({ message: 'User not found' });
        }
      })
      .catch(error => res.status(400).send({ message: error.message }));
  } else {
    res.status(400).send({ message: 'Invalid role' });
  }
});

// Define the route for updating user profiles
router.patch('/', authorization, (req, res) => {
  const { _id, role } = req.user;
  const {
    firstName,
    lastName,
    companyName,
    companyEmail,
    companyPhone,
    phone,
    address,
    gender,
    coverletter,
  } = req.body;

  if (role === ADMIN) {
    Admin.updateOne({ _id }, { $set: { firstName, lastName } })
      .then(success => res.status(200).send(success.nModified))
      .catch(error => res.status(400).send({ message: error.message }));
  } else if (role === COMPANY) {
    Company.updateOne(
      { _id },
      { $set: { firstName, lastName, companyName, companyEmail, companyPhone } }
    )
      .then(success => res.status(200).send(success.nModified))
      .catch(error => res.status(400).send({ message: error.message }));
  } else if (role === STUDENT) {
    Student.updateOne(
      { _id },
      {
        $set: { firstName, lastName, phone, address, gender, coverletter },
      }
    )
      .then(success => res.status(200).send(success.nModified))
      .catch(error => res.status(400).send({ message: error.message }));
  } else {
    res.status(400).send({ message: 'Invalid role' });
  }
});

module.exports = router;
