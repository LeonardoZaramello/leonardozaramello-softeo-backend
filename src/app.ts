import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import * as dotenv from 'dotenv'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    dotenv.config()
    mongoose.connect(process.env.MONGODB_URI || 'http://localhost:27017/Softeobd')
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
