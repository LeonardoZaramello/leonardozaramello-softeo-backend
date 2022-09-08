import { Request, Response } from 'express'
import User from '../Schemas/User'

class UserController {
  public async findAll (req: Request, res:Response): Promise<Response> {
    const user = await User.find()

    return res.json(user)
  }
}

export default new UserController()
