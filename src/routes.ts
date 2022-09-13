import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.findAll)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)
routes.delete('/users/:id/:instalment', UserController.deleteInstalment)
routes.delete('/usersDeleteAll', UserController.deleteAllUsers)

export default routes
