const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const apiRoutes = require('./routes/api');
const port = 5000;

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
  

const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/api', apiRoutes);
app.use('/', router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});