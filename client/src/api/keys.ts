import values from "./values"

const getKeys = async (method: string) => {
  const limitIndex = () => {
    if (method === 'peoples')
      return 8
    else if (method === 'films')
      return 5
    else if (method === 'starships')
      return 13
    else if (method === 'vehicles')
      return 11
    else if (method === 'species')
      return 10
    else
      return 9
  }

  const [response] = await values[method]
  const result = await Object.keys(response)
  const keys = result.splice(0, limitIndex())

  return keys
}

const keys = {
  peoples  : getKeys('peoples'),
  films    : getKeys('films'),
  starships: getKeys('starships'),
  vehicles : getKeys('vehicles'),
  species  : getKeys('species'),
  planets  : getKeys('planets')
}

export default keys