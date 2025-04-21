const express = require('express');
const cors = require('cors');
const generateRoute = require('./routes/generate');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/generate', generateRoute);

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));