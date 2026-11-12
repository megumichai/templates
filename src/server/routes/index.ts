import { Router } from 'express'

export const apiRouter = Router()

apiRouter.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

apiRouter.get('/hello', (req, res) => {
  const name = typeof req.query.name === 'string' ? req.query.name : 'world'
  res.json({ message: `hello ${name}` })
})
