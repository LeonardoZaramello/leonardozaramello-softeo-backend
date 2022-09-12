import express from 'express'
import app from './app'

const port = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.listen(port, () => console.log(`Server initialized in port: ${port}`))
