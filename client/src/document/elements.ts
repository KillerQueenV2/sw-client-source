const searchInput   = document.getElementById('search') as HTMLInputElement
const listContainer = document.getElementById('list') as HTMLDivElement

const buttonPeoples   = document.getElementById('btn-peoples') as HTMLButtonElement
const buttonFilms     = document.getElementById('btn-films') as HTMLButtonElement
const buttonStarships = document.getElementById('btn-starships') as HTMLButtonElement
const buttonVehicles  = document.getElementById('btn-vehicles') as HTMLButtonElement
const buttonSpecies   = document.getElementById('btn-species') as HTMLButtonElement
const buttonPlanets   = document.getElementById('btn-planets') as HTMLButtonElement

const elements = {
  searchInput,
  listContainer,
  buttonPeoples,
  buttonFilms,
  buttonStarships,
  buttonVehicles,
  buttonSpecies,
  buttonPlanets
}

export default elements