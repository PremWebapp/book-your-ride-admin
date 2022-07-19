import React from 'react'
import ReactApexChart from 'react-apexcharts'

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

    };
    return (
        <div className='pt-3'>
            <h4 className="px-4"> Available Cars</h4>
            <div className='pb-5'>

                <div class=" mx-4 bg-white card shadow">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col text-center">
                            <div class="card-body mx-5">
                                <div className=" justify-content-center ">
                                    <div>
                                        <select className='w-50 my-2 p-2 border rounded'>
                                            <option value="volvo">Car Brand</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select className='w-50 my-2 p-2 border rounded'>
                                            <option value="volvo">Car Model</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select className='w-50 my-2 p-2 border rounded '>
                                            <option value="volvo">Car Year</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col text-center mx-auto">
                            <div class="card-body mx-5 ">
                                <div className="row d-flex justify-content-center ">
                                
                                   <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={400} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default DashbordAvalableCard