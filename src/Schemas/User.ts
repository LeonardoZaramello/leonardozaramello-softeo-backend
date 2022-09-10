import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  userName: string,
  service: string,
  value: number,
  instalment: number,
  paymentDay: Date,
  payed: boolean
}

const UserSchema = new Schema<UserInterface>({
  userName: { type: String, required: [true, 'Nome de cliente inválido'], minlength: [3, 'Mínimo de 3 letras no Nome do Cliente'] },
  service: { type: String, required: [true, 'Nome do serviço inválido'] },
  value: { type: Number, required: [true, 'Valor do serviço inválido'], cast: 'Informe um número no valor do serviço' },
  instalment: { type: Number, required: [true, 'Parcelamento inválido'], cast: 'Informe um número nas parcelas' },
  paymentDay: { type: Date, required: [true, 'Dia do primeiro pagamento inválido'], cast: 'Informe uma data válida' },
  payed: { type: Boolean, required: [true, 'Informação de pagamento inválida'], cast: 'Informe se a primeira parcela já foi paga' }
},
{
  timestamps: true
})

export default model('User', UserSchema)
