import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const portORM = process.env.TYPEORM_PORT as unknown as number

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: portORM,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  url: process.env.DATABASE_URL
})
