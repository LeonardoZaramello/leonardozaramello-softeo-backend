import User from '../Schemas/User'
import { addDays } from 'date-fns'

class UserService {
  private fixValues (value: number) {
    return Math.round(value * 100) / 100
  }

  private getInstalments (value: number, instalment: number, firstPaymentDayFix: Date, payed: boolean) {
    const listOfPayments = []
    const valueFix = this.fixValues(value / instalment)
    let instalmentSums = 0

    for (let index = 1; index <= instalment; index += 1) {
      if (index === instalment) {
        const instalmentBody = {
          number: index,
          value: this.fixValues(value - instalmentSums),
          paymentDay: addDays(firstPaymentDayFix, 30 * (index - 1)),
          payed: index === 1 ? payed : false
        }
        listOfPayments.push(instalmentBody)
      } else {
        const instalmentBody = {
          number: index,
          value: valueFix,
          paymentDay: addDays(firstPaymentDayFix, 30 * (index - 1)),
          payed: index === 1 ? payed : false
        }
        instalmentSums = instalmentSums + valueFix
        listOfPayments.push(instalmentBody)
      }
    }

    return listOfPayments
  }

  public async createUser (userName: string, email: string, service: string, value: number, instalment: number, firsPaymentDay: Date, payed: boolean) {
    try {
      const firstPaymentDayFix = new Date(firsPaymentDay)
      const instalmentInfos = this.getInstalments(value, instalment, firstPaymentDayFix, payed)

      const userBody = {
        userName,
        email,
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

  public async deleteInstalment (id: string, _instalment: string) {
    try {
      await User.deleteMany({ _id: id })

      return 'Todos os usuários foram removidos'
    } catch (error) {
      return error
    }
  }
}

export default new UserService()
