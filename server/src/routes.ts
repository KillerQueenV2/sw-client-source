import express from 'express'
import bodyParser from 'body-parser'
import data from './api/data'
import search from './api/saerch'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/peoples', async (_, response: express.Response) => {
  const planets = await data.peoples
  return response.status(200).send(planets)
})

app.get('/films', async (_, response: express.Response) => {
  const films = await data.films
  return response.status(200).send(films)
})

app.get('/starships', async (_, response: express.Response) => {
  const starships = await data.starships
  return response.status(200).send(starships)
})

app.get('/vehicles', async (_, response: express.Response) => {
  const vehicles = await data.vehicles
  return response.status(200).send(vehicles)
})

app.get('/species', async (_, response: express.Response) => {
  const species = await data.species
  return response.status(200).send(species)
})

app.get('/planets', async (_, response: express.Response) => {
  const planets = await data.planets
  return response.status(200).send(planets)
})

app.post('/search', async (request: express.Request, response: express.Response) => {
  const { path, searchText } = request.body
  const result = await search(path, searchText)
  return response.status(200).send(result)
})

export default app