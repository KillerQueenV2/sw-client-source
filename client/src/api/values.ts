const getFromAPI = async (path: string) => {
  const data = await fetch(path)
  const result = await data.json()

  return result
}

const values = {
  peoples  : getFromAPI('/peoples'),
  films    : getFromAPI('/films'),
  starships: getFromAPI('/starships'),
  vehicles : getFromAPI('/vehicles'),
  species  : getFromAPI('/species'),
  planets  : getFromAPI('/planets')
}

export default values