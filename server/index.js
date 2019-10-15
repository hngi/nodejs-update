const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('./database/db');
require('./model/ShortenLink');
require("./routes/urlshorten")(app);
const router = require('./routes');

app.use(cors());

app.use(express.json({ extended: false }));

app.use('/api/v1', router);

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 3500;

// if (!module.parent) {
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// }
