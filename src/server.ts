import app from './app'
import dotenv from 'dotenv'
dotenv.config()

const PORT = 3001 || process.env.PORT

app.listen(PORT, () => console.log(`Server initialized in port: ${PORT}`))
