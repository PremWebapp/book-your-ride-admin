import DashbordAvalableCard from './helper/dashbordAvalableCard'
import DashbordLineCart from './helper/dashbordLineCart'
import DashbordPychartCard from './helper/dashbordPychartCard'
import DashbordTotalUsesDetailsCard from './helper/dashbordTotalUsesDetailsCard'


//  in testing
import { TiGroup } from "react-icons/ti";
import { AiFillCar } from "react-icons/ai";
import ReactApexChart from 'react-apexcharts'

function MainContentDashbord() {
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
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column px-1">
                <div id="content">

                    <div class="row pt-4 px-3">
                        <div class="col-sm-7">
                            <div class="bg-info border py-2 ">
                                <div class="card-body d-flex justify-content-center border-bottom bg-white ">
                                    <div className=" text-center my-auto py-4">
                                        <h4 class="card-text font-weight-bold text-danger">Total Number of Users</h4>
                                        <h3>8056 k</h3>
                                    </div>
                                    <span className='mx-3 text-danger'>   <TiGroup size={90} /></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="bg-info border py-2">
                                <div class="card-body d-flex justify-content-center border-bottom bg-white">
                                    <div className="text-center my-auto py-4">
                                        <h4 class="card-text font-weight-bold text-danger">Total number of service Provider</h4>
                                        <h3 >9056 k</h3>
                                    </div>
                                    <span className='mx-3 text-danger'> <AiFillCar size={90} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* scvsadvdsavsdvdsvsvsv s */}
                    <h5 className="px-4 pt-4 font-weight-bold">Payment</h5>

                    <div class="row  px-3">
                        <div class="col-sm-5">
                            <div class="bg-info border py-2 ">
                                <div class="card-body d-flex justify-content-center border-bottom bg-white ">
                                    <div className=" text-center my-auto">
                                        <h4 class="card-text font-weight-bold text-danger">Total Earning</h4>
                                        <h3>8056 </h3>
                                    </div>
                                    <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} />

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <div class="bg-info border py-2">
                                <div class="card-body d-flex justify-content-center border-bottom bg-white">
                                    <div className="text-center my-auto">
                                        <h4 class="card-text font-weight-bold text-danger">Total Booking Request</h4>
                                        <h3 >8056 </h3>
                                    </div>
                                    <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className='pt-3'>
                        <div class=" mx-4  py-4  shadow "> 
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col text-center card">
                                    <div class="card-body ">
                                        <p class="card-text font-weight-bold">Total Number of Users</p>
                                        <div className="d-flex justify-content-center  border-bottom ">
                                            <h3>8056 k</h3>
                                            <span className='mx-3'>   <TiGroup size={45} /></span>

                                        </div>
                                    </div>
                                </div>

                                <div class="col text-center card">
                                    <div class="card-body  ">
                                        <p class="card-text font-weight-bold">Total number of service provider</p>
                                        <div className="d-flex justify-content-center  border-bottom ">
                                            <h3 >8056 k</h3>
                                            <span className='mx-3'> <AiFillCar size={45} /></span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div> */}

                    {/*total user details  */}
                    {/* <DashbordTotalUsesDetailsCard /> */}

                    {/* pychat container */}
                    {/* <DashbordPychartCard/> */}

                    {/* line  container */}

                    {/* avalable  container */}
                    {/* <DashbordAvalableCard /> */}

                    {/* <!-- /.container-fluid --> */}


                    <div className='pt-4'>
                    <h5 className="px-4  font-weight-bold"> Available Cars</h5>
                    </div>


                    <div class="row  px-3">
                        <div class="col-sm-7">
                            <div class="bg-info border py-2 ">
                                <div class="card-body d-flex justify-content-center border-bottom bg-white ">
                                   
                                    <ReactApexChart options={datastate.options} series={datastate.series} type="pie" width={300} />

                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5">
                            <div class="bg-info border py-2">
                                <div class="card-body  justify-content-center border-bottom bg-white py-3 px-4 ">
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

                    <DashbordLineCart />

                </div>
            </div>

        </>
    )
}

export default MainContentDashbord
