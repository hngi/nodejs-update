const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('./database/db');
const users = require("./routes/users");

const router = require('./routes');

app.use(cors());

app.use(express.json({ extended: false }));

// app.use('/api/v1', router);
app.get("/", (req, res) => {
  res.send('i am working')
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 3500;

app.use("/users", users);

// if (!module.parent) {
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// }
