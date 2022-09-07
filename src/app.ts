import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

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
    mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/Softeobd')
  }

  private routes () {
    this.express.get('/', (req, res) => {
      return res.send('Hello World!')
    })
  }
}

export default new App().express

// const app = express()

// app.use(express.json())

// app.get('/', (req, res) => {
//   return res.json('Server on')
// })

// app.listen(port, () => console.log(`Server initialized in port: ${port}`))