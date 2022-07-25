import React from 'react'
import ReactApexChart from 'react-apexcharts'
import style from '../dashbord.module.css'

function DashbordAvalableCard() {
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
            <div className='pt-4'>
                <h6 className="px-4  font-weight-bold "> Available Cars</h6>
            </div>


            <div class="row  px-3">
                <div class="col-sm-7">
                    <div class={` ${style.cardPadding} shadow-sm `}>
                        <div class="card-body d-flex justify-content-center  bg-white ">
                            <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} />
                        </div>
                    </div>
                </div>

                <div class="col-sm-5">
                    <div class={` ${style.cardPadding} shadow-sm `}>
                        <div class="card-body  justify-content-center  bg-white py-3 px-4 ">
                            <select class=" form-control my-3" aria-describedby="basic-addon1">
                                <option value="volvo">Car Brand</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select class=" form-control my-3" aria-describedby="basic-addon1">
                                <option value="volvo">Car Model</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select class=" form-control my-3" aria-describedby="basic-addon1">
                                <option value="volvo">Car Year</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashbordAvalableCard