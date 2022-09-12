import User from '../Schemas/User'
import { addDays } from 'date-fns'

class UserService {
  private getInstalments (value: number, instalment: number, firstPaymentDayFix: Date, payed: boolean) {
    const listOfPayments = []
    const valueFix = (value / instalment).toFixed(2)

    for (let index = 1; index <= instalment; index += 1) {
      const instalmentBody = {
        number: index,
        value: valueFix,
        paymentDay: addDays(firstPaymentDayFix, 30 * index - 1),
        payed: index === 1 ? payed : false
      }
      listOfPayments.push(instalmentBody)
    }

    console.log(listOfPayments)

    return listOfPayments
  }

  public async createUser (userName: string, service: string, value: number, instalment: number, firsPaymentDay: Date, payed: boolean) {
    try {
      const firstPaymentDayFix = new Date(firsPaymentDay)
      const instalmentInfos = this.getInstalments(value, instalment, firstPaymentDayFix, payed)

      const userBody = {
        userName,
        service,
        value,
        instalment,
        firsPaymentDay: firstPaymentDayFix,
        payed,
        instalmentInfos
      }

      const user = await User.create(userBody)
      return user
    } catch (error) {
      return error
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
      return error
    }
  }

  public async deleteAllUsers () {
    try {
      await User.deleteMany({})

      return 'Todos os usuários foram removidos'
    } catch (error) {
      return error
    }
  }
}

export default new UserService()
