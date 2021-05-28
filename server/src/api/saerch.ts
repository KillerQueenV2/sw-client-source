import fetch from 'node-fetch'

const search = async (path: string, search: string) => {
  const args = search ? `?search=${search}` : ''
  const API = search ? 'https://swapi.dev/api' : ''

  const response = await fetch(`${API}/${path}${args}`)
  const { results } = await response.json()

  return results
}

export default search