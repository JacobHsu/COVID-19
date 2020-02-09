import area from './area.json'

export default function buildMapData () {
  const mapData = {
    updateTime: area.lastUpdateTime
  }
  return mapData
}
