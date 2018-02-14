import mongoose, { Schema } from 'mongoose'

const getRandomInt = () => {
  const min = Math.ceil(0)
  const max = Math.floor(10000)
  return Math.floor(Math.random() * (max - min)) + min
}

const itemsSchema = new Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true }
})

const orderSchema = new Schema({
  code: { type: String, default: getRandomInt, index: true },
  items: {
    type: [itemsSchema],
    required: true
  }
})

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  cnpj: {
    type: Number,
    required: true,
    index: true
  },
  orders: [orderSchema]
})

export { itemsSchema }
export default mongoose.model('Company', companySchema)
