import fetch from 'node-fetch'

const getDataFromAPI = (url: string, length: number) => {
  const data = [...Array(length)].map(async (_, i) => {
    const path = url.split('/')[4]

    const getIncrementationIndex = () => {
      if (path === 'starships')
        return 2
      else if (path === 'vehicles')
        return 4
      else
        return 1
    }

    const response = await fetch(`${url}${i + getIncrementationIndex()}/`)
    const result = await response.json()

    return result
  })

  return data
}

export default getDataFromAPI