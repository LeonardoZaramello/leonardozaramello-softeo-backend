import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  userName: { type: String, required: [true, 'Nome de cliente inválido'], minlength: [3, 'Mínimo de 3 letras no Nome do Cliente'] },
  service: { type: String, required: [true, 'Nome do serviço inválido'] },
  value: { type: Number, required: [true, 'Valor do serviço inválido'], cast: 'Informe um número no valor do serviço' },
  instalment: { type: Number, required: [true, 'Parcelamento inválido'], cast: 'Informe um número nas parcelas' },
  firsPaymentDay: { type: Date, required: [true, 'Dia do primeiro pagamento inválido'], cast: 'Informe uma data válida' },
  payed: { type: Boolean, required: [true, 'Informação de pagamento inválida'], cast: 'Informe se a primeira parcela já foi paga' },
  instalmentInfos: { type: [] }
},
{
  timestamps: true
})

export default model('User', UserSchema)
