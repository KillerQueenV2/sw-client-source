import express from 'express'
import routes from './routes'

const app = express()
app.use(routes)
app.use(express.static(__dirname + './../../client/dist'));

const port = process.env.PORT || 3000

const message = `Started at: http://localhost:${port}

Peoples:    http://localhost:${port}/peoples
Films:      http://localhost:${port}/films
Starships:  http://localhost:${port}/starships
Vehicles:   http://localhost:${port}/vehicles
Species:    http://localhost:${port}/species
Planets:    http://localhost:${port}/planets`

app.listen(port, () => console.warn(message))