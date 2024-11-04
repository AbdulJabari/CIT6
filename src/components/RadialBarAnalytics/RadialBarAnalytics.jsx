import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class RadialBarAnalytics extends Component {
  constructor(props) {
    const { completed = 20, notCompleted = 35 } = props
    super(props)
    this.state = {
      options: {
        plotOptions: {
          radialBar: {
            // startAngle: -180,
            // endAngle: 180,

            track: {
              background: '#f2f2f2',
              strokeWidth: '97%',
            },
            dataLabels: {
              show: true,
              value: {
                show: true,
                fontSize: '32px',
              },
              total: {
                show: true,
                label: '',
                color: '#7F1D1D',
              },
            },
          },
        },
      },

      series: [Math.floor((completed / notCompleted) * 100).toFixed(2)],
    }
  }

  render() {
    return (
      <div className="donut -mt-4">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="400"
        />
      </div>
    )
  }
}

export default RadialBarAnalytics
