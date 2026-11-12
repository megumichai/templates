import { createServer } from 'node:http'

import { app } from './app.js'

const port = Number(process.env.PORT ?? 3000)
const server = createServer(app)

server.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`)
})

const shutdown = () => {
  server.close(() => {
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
