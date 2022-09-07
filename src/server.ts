import 'reflect-metadata'
import express from 'express'

const app = express()
app.use(express.json())
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  return res.json('Server on')
})

app.listen(port, () => console.log(`Server initialized in ${port}`))
