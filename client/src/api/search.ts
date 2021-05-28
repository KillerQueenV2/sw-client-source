const API = 'https://swapi.dev/api'

const search = async (path: string, search: string) => {
  let currentPath = path

  if (path === 'people') {
    currentPath = 'peoples'
  }

  const response = await fetch('search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path: path,
      searchText: search
    })
  })

  const data = response.json()
  
  return data
}

export default search