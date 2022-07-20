import React from 'react'
import ReactApexChart from 'react-apexcharts'

function DashbordLineCart() {
  const datastate = {

    series: [{
      name: "Data1",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
      name: "Data2",
      data: [5, 80, 30, 51, 20, 90, 69, 91, 100]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
        colors:['#dc3545']
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },

  }
  return (
    <div className=' mx-3 py-5'>
      <div class=" bg-info px-2">
        <div className=" py-2 mx-1">
          <div class="row row-cols-1 row-cols-md-2 bg-white border shadow">
            <div class="col text-center">
              <div class="card-body mx-5" style={{ width: '72vw' }}>
                <ReactApexChart options={datastate.options} series={datastate.series} type="line" height={350} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashbordLineCart