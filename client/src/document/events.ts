import elements from './elements'
import insertDataIntoTheTable from './insertDataIntoTheTable'
import searchRows from './table/searchRows'

let path = 'people'

const events = () => {
  elements.searchInput.oninput = function() {
    const value = (<HTMLInputElement>this).value
    if (value) {
      searchRows(path, value)
    } else {
      if (path === 'people') {
        insertDataIntoTheTable('peoples')
        return
      }
      insertDataIntoTheTable(path)
    }
  }

  elements.buttonPeoples.addEventListener('click', () => {
    (<HTMLInputElement>elements.searchInput).value = ''
    insertDataIntoTheTable('peoples')
    path = 'people'
  })

  elements.buttonFilms.addEventListener('click', () => {
    (<HTMLInputElement>elements.searchInput).value = ''
    insertDataIntoTheTable('films')
    path = 'films'
  })

  elements.buttonStarships.addEventListener('click', () => {
    (<HTMLInputElement>elements.searchInput).value = ''
    insertDataIntoTheTable('starships')
    path = 'starships'
  })
  elements.buttonVehicles.addEventListener('click', () => {
    (<HTMLInputElement>elements.searchInput).value = ''
    insertDataIntoTheTable('vehicles')
    path = 'vehicles'
  })

  elements.buttonSpecies.addEventListener('click', () => {
    (<HTMLInputElement>elements.searchInput).value = ''
    insertDataIntoTheTable('species')
    path = 'species'
  })

  elements.buttonPlanets.addEventListener('click', () => {
    (<HTMLInputElement>elements.searchInput).value = ''
    insertDataIntoTheTable('planets')
    path = 'planets'
  })
}

export default events