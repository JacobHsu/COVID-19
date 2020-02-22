
export default function buildDeadConfig (xAxis, dataDead) {
  return {
    title: {
      text: '疫情累计趋势(%)'
    },
    legend: {
      data: ['每日死亡率'],
      top: '25',
      left: '0'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: xAxis
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 1.5,
      }
    ],
    series: [
      {
        name: '每日死亡率',
        type: 'line',
        smooth: true,
        data: dataDead
      }
    ]
  }
}
  