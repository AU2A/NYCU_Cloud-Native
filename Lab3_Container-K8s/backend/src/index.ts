// import * as dotenv from 'dotenv'
import { AppConfig } from './types/config'
import { env } from 'process'
import { serverOf, serverStart } from './server'

// dotenv.config()

const server = serverOf()

// const appConfig: AppConfig = {
//   host: process.env.HOST || 'localhost',
//   port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
//   mongoConnectionString: process.env.MONGO_CONNECTION_STRING || ''
// }

const appConfig: AppConfig = {
  host: '0.0.0.0',
  port: 8888,
  mongoConnectionString: 'mongodb://'+env.DB_HOST+':27017/myMernApp'
}


serverStart(appConfig)(server)
  .then(() => {
    console.log(`Server listening on ${appConfig.host}:${appConfig.port}`)
  })
  .catch((err) => {
    console.error(err)
  })
