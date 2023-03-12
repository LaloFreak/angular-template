const config = require('../config/index')
const mongoose = require('mongoose')

module.exports = class DB {
  static connect() {
    mongoose.Promise = global.Promise;
    return mongoose.connect(
      config.MONGODB_URI,
      {useNewUrlParser: true}
    )
  }
}