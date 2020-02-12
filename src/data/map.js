import ECharts from '../components/ECharts.vue'
import buildMapConfig from './config_map'
import chinaMap from '../data/china.json'
import area from './area.json'

export default function buildMapData (province) {
  const mapData = {
    updateTime: area.lastUpdateTime,
    today: null,
    total: null,
    map: null,
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

  mapData.total = area.chinaTotal
  mapData.today = area.chinaAdd
  mapData.map = buildMapConfig(province, result)
  return mapData
}
