import React from 'react'
import { Chart } from 'react-charts'

class StockChart extends React.Component {
    render() {
        return (<div style={{width:"800px", height:"200px", margin:"0 auto"}}>
            <Chart data={this.props.data} series={{ showPoints: false }} axes={[
                { primary: true, type: 'time', position: 'bottom' },
                { type: 'linear', position: 'left' }
            ]} tooltip />
        </div>);
    }
}

export default StockChart;