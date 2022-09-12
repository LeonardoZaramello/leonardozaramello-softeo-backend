import app from './app'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3003

app.listen(PORT, () => console.log(`Server initialized in port: ${PORT}`))
