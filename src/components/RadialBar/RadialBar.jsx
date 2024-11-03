import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class RadialBar extends Component {
  constructor(props) {
    const { numCorrect, questionLength } = props
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
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Quiz Score',
                color: '#373d3f',
              },
            },
          },
        },
      },

      series: [((numCorrect / questionLength) * 100).toFixed(0)],
    }
  }

  render() {
    return (
      <div className="donut -mt-4">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="300"
        />
      </div>
    )
  }
}

export default RadialBar
