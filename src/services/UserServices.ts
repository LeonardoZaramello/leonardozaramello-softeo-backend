import User from '../Schemas/User'
import { addDays } from 'date-fns'

class UserService {
  public async createUser (userName: string, service: string, value: number, instalment: number, paymentDay: Date, payed: boolean) {
    try {
      const userToAdd = []
      const datePayment = new Date(paymentDay)

      for (let index = 1; index <= instalment; index += 1) {
        const userBody = {
          userName,
          service,
          value: value / instalment,
          instalment: index,
          paymentDay: index === 1 ? datePayment : addDays(datePayment, 30 * index),
          payed: index === 1 ? payed : false
        }
        userToAdd.push(userBody)
      }

      const user = await Promise.all(userToAdd.map((user) => User.create(user)))
      return user
    } catch (error) {
      // eslint-disable-next-line dot-notation
      return Object.values(error.errors)[0]['message']
    }
  }

  public async deleteUser (id: string) {
    try {
      const foundUser = await User.findOne({ _id: id })
      if (!foundUser) {
        return 'Cliente especificado não existe dentro do sistema'
      }

      await User.deleteOne({ _id: id })
      return `Cliente ${foundUser.userName} removido do sistema`
    } catch (error) {
      // eslint-disable-next-line dot-notation
      return Object.values(error.errors)[0]['message']
    }
  }
}

export default new UserService()
