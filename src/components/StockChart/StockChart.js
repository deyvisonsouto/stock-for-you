import React from 'react'
import { Chart } from 'react-charts'

function StockChart(props) {

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  return (<div style={{ width: "768px", height: "200px", margin: "0 auto" }}>
    <Chart data={props.data} series={series} axes={axes} tooltip />
  </div>);

}

export default StockChart;