import React from 'react'
import ReactApexChart from 'react-apexcharts'
import style from '../dashbord.module.css'

function DashbordPaymentCard() {
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

    }
    return (
        <div>
            <h6 className="px-4 pt-4 font-weight-bold ">Payment</h6>

            <div class="row  px-3">
                <div class="col-sm-5">
                    <div class={` ${style.cardPadding} shadow-sm `}>
                        <div class="card-body d-flex justify-content-center bg-white ">
                            <div className=" text-center my-auto">
                                <h6 class="card-text font-weight-bold text-danger">Total Earning</h6>
                                <h4>8056 </h4>
                            </div>
                            <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} />

                        </div>
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class={` ${style.cardPadding} shadow-sm `}>
                        <div class="card-body d-flex justify-content-center bg-white">
                            <div className="text-center my-auto">
                                <h6 class="card-text font-weight-bold text-danger">Total Booking Request</h6>
                                <h4 >8056 </h4>
                            </div>
                            <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashbordPaymentCard