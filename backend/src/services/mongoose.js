import bluebird from 'bluebird'
import mongoose from 'mongoose'
import configs from '../../config'

mongoose.Promise = bluebird
const { mongo } = configs

Object.keys(mongo.options).forEach((key) => {
  mongoose.set(key, mongo.options[key])
})

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

export default mongoose
