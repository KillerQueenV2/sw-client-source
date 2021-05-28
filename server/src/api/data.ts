import getDataFromAPI from './getDataFromAPI'
import search from './saerch'

const API = 'https://swapi.dev/api'

const data = {
  peoples  : Promise.all(getDataFromAPI(`${API}/people/`, 83)),
  films    : Promise.all(getDataFromAPI(`${API}/films/`, 6)),
  starships: Promise.all(getDataFromAPI(`${API}/starships/`, 15)),
  vehicles : Promise.all(getDataFromAPI(`${API}/vehicles/`, 62)),
  species  : Promise.all(getDataFromAPI(`${API}/species/`, 37)),
  planets  : Promise.all(getDataFromAPI(`${API}/planets/`, 60)),
  search
}

export default data