import events from './document/events'
import insertDataIntoTheTable from './document/insertDataIntoTheTable'

(function init() {
  insertDataIntoTheTable('peoples')
  events()
})()