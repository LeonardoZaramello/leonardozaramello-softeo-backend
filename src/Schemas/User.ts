import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  userName: String,
  service: String,
  value: Number,
  instalment: Number,
  paymentDay: Date,
  payed: Boolean
},
{
  timestamps: true
})

export default model('User', UserSchema)
