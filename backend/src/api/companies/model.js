import mongoose, { Schema } from 'mongoose'

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cnpj: {
    type: Number,
    required: true
  }
})

export default mongoose.model('Company', companySchema)
