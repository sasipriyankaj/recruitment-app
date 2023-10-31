const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/api/auth');
const companiesRouter = require('./routes/api/companies');
const studentsRouter = require('./routes/api/students');
const jobsRouter = require('./routes/api/jobs');
const profileRouter = require('./routes/api/profile');

const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://sasi15july2002:sasi15july2002@cluster0.llyoprf.mongodb.net/project?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
  
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/user', authRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/students', studentsRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/profile', profileRouter);
app.use((req, res) => res.status(404).send('404 - Not Found'));
module.exports = app;
