import keys from "./../../api/keys"

const getColumns = async (info: string) => {
  const data = await keys[info]
  
  const columns = data.map((_, i) => `<th>${data[i]}</th>`)
  const stringColumns = columns + ''
  const htmlColumns = `<tr>${stringColumns.replace(/[,]/g, '')}</tr>`

  return htmlColumns
}

export default getColumns