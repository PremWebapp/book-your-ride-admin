import React from 'react'
import ReactApexChart from 'react-apexcharts'

function DashbordPychartCard() {
    const datastate = {

        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },

    };
    return (
        <div className="pt-3">
            <h4 className="px-4"> Payment </h4>
            <div className=''>

                <div class=" mx-4 bg-white card shadow ">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col text-center">
                            <div class="card-body mx-5">
                                <div className="row d-flex justify-content-center ">
                                    <div className="col my-auto">
                                        <p class="card-text font-weight-bold">Total Earning</p>
                                        <h3>8056k</h3>
                                    </div>
                                    <span className='mx-3 col'>     <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} /></span>
                                </div>
                            </div>
                        </div>

                        <div class="col text-center mx-auto">
                            <div class="card-body mx-5 ">
                                <div className="row d-flex justify-content-center ">
                                    <div className="col my-auto">
                                        <p class="card-text font-weight-bold">Total Booking Request</p>
                                        <h3>8056k</h3>
                                    </div>
                                    <span className='mx-3 col'>   <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} /></span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default DashbordPychartCard