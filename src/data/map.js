import ECharts from '../components/ECharts.vue'
import buildLineConfig from './config_line'
import buildMapConfig from './config_map'
import chinaMap from '../data/china.json'
import area from './area.json'

export default function buildMapData (province) {
  const mapData = {
    updateTime: area.lastUpdateTime,
    today: null,
    total: null,
    map: null,
    table: null,
    chinaDayList: null
  }
  
  const provinces = area.areaTree[0].children
  const result = []

  ECharts.registerMap('china', chinaMap)

  provinces.forEach(p => {
    result.push({
      name: p.name,
      value: p.total.confirm
    })
  })

  const xAxis = []
  const dataConfirm = []
  const dataSuspect = []
  const dataDead = []
  area.chinaDayList.forEach(day => {
    xAxis.push(day.date)
    dataConfirm.push(day.confirm)
    dataSuspect.push(day.suspect)
    dataDead.push(day.dead)
  })

  mapData.total = area.chinaTotal
  mapData.today = area.chinaAdd
  mapData.table = area.areaTree[0].children
  mapData.map = buildMapConfig(province, result)
  mapData.chinaDayList = buildLineConfig(xAxis, dataConfirm, dataSuspect, dataDead)
  return mapData
}
