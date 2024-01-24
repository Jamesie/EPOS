const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const apiRoutes = require('./routes/api');
const mongoose = require('mongoose');
require('dotenv/config');

const port = process.env.PORT || 5000;

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRoutes);
app.use('/', router);

mongoose.connect(process.env.DB_URI)
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
