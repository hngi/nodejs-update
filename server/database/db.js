let mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.DB_URL

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log('Database connected');
      })
      .catch(err => {
        console.error(err);
      });
  }
}

module.exports = new Database();