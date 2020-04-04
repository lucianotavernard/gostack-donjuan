import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import { resolve } from 'path'
import Youch from 'youch'

import routes from './routes'

import './database'

class App {
  constructor() {
    this.server = express()
    this.isDev = process.env.NODE_ENV === 'development'

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }

  routes() {
    this.server.use(routes)
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (this.isDev) {
        const errors = await new Youch(err, req).toJSON()

        return res.status(500).json(errors)
      }

      return res.status(500).json({ error: 'Internal server error' })
    })
  }
}

export default new App().server
