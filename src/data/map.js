import ECharts from '../components/ECharts.vue'
import buildLineConfig from './config_line'
import buildMapConfig from './config_map'
import buildDeadConfig from './config_dead'
import chinaMap from '../data/china.json'
import area from './area.json'
import { drop } from 'ramda';

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
  const mortalityRate = []
  area.chinaDayList.forEach(day => {
    xAxis.push(day.date)
    dataConfirm.push(day.confirm)
    dataSuspect.push(day.suspect)
    dataDead.push(day.dead)
    let dayMortalityRate = Number(day.dead / day.confirm *100).toFixed(2);
    mortalityRate.push(dayMortalityRate)
  })

  mapData.total = area.chinaTotal
  mapData.today = area.chinaAdd
  mapData.table = area.areaTree[0].children
  mapData.map = buildMapConfig(province, result)
  mapData.chinaDayList = buildLineConfig(xAxis, dataConfirm, dataSuspect, dataDead)
  mapData.tableDayList = area.chinaDayList

  const dayMortalityRate = drop(15, mortalityRate)
  const dayxAxis = drop(15, xAxis)
  mapData.chinaDayDeadList = buildDeadConfig(dayxAxis, dayMortalityRate)
  return mapData
}



