import area from './area.json'

export default function buildMapData () {
  const mapData = {
    updateTime: area.lastUpdateTime,
    today: null,
    total: null
  }
  mapData.total = area.chinaTotal
  mapData.today = area.chinaAdd
  return mapData
}
