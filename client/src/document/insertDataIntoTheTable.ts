import elements from './elements'

import getColumns from './table/columns'
import getRows from './table/rows'

const insertDataIntoTheTable = async (path: string) => {
  elements.listContainer.innerHTML = `
    <table>
      ${await getColumns(path)}
      ${await getRows(path)}
    </table>
  `
}

export default insertDataIntoTheTable