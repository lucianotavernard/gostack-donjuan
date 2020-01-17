import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import { resolve } from 'path'

import routes from './routes'

import './database'

class App {
  constructor() {
    this.server = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
    this.exception()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes() {
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    )
    this.server.use(routes)
  }

  exception() {
    this.server.use((err, req, res, next) => {
      return res
        .status(err.status || 500)
        .json({ error: err.message || 'Internal Server Error' })
    })
  }
}

export default new App().server
