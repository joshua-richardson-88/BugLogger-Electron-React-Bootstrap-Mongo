const mongoose = require('mongoose')
require('dotenv').config()

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const url = process.env.MONGO_URL
const collection = process.env.MONGO_COLLECTION
const authSource = process.env.MONGO_AUTH_SOURCE
  ? `?authSource=${process.env.MONGO_AUTH_SOURCE}`
  : ''

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${username}:${password}@${url}/${collection}${authSource}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    console.log('Database connected')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
