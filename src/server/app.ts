import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

import express from 'express'
import type { NextFunction, Request, Response } from 'express'

import { apiRouter } from './routes/index.js'

export const app = express()

app.use(express.json())
app.use('/api', apiRouter)

const webDist = resolve(process.cwd(), 'dist/web')

if (existsSync(webDist)) {
  app.use(express.static(webDist))

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) {
      next()
      return
    }

    res.sendFile(join(webDist, 'index.html'))
  })
}

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' })
})

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error)
  res.status(500).json({ message: 'Internal Server Error' })
})
