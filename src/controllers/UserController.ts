import { Request, Response } from 'express'
import User from '../Schemas/User'
import UserService from '../services/UserServices'

class UserController {
  public async findAll (req: Request, res:Response): Promise<Response> {
    const user = await User.find()

    return res.json(user)
  }

  public async create (req: Request, res:Response): Promise<Response> {
    try {
      const { userName, service, value, instalment, firsPaymentDay, payed } = req.body

      const createdUser = await UserService.createUser(userName, service, value, instalment, firsPaymentDay, payed)

      return res.json(createdUser)
    } catch (err) {
      return res.json(err)
    }
  }

  public async delete (req: Request, res:Response): Promise<Response> {
    try {
      const { id } = req.params

      const deletedUser = await UserService.deleteUser(id)

      return res.json(deletedUser)
    } catch (err) {
      return res.json(err)
    }
  }

  public async deleteAllUsers (req: Request, res:Response): Promise<Response> {
    try {
      const deletedAll = await UserService.deleteAllUsers()

      return res.json(deletedAll)
    } catch (err) {
      return res.json(err)
    }
  }

  public async deleteInstalment (req: Request, res:Response): Promise<Response> {
    try {
      const { id, instalment } = req.params
      const deletedInstalment = await UserService.deleteInstalment(id, instalment)

      return res.json(deletedInstalment)
    } catch (err) {
      return res.json(err)
    }
  }
}

export default new UserController()
