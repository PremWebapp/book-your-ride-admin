import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { message, Table, Switch } from 'antd';

function VahicleView() {
    let navigate = useNavigate();

    // For Category Auto Generate Id 

    return (
        <>
            <div className="container-fluid ">
                {/* USER MANAGEMENT VIEW card start */}
                <div className="pt-4">
                    <h5 className=" font-weight-bold"><button className="pr-3 border-0" onClick={() => navigate(-1)}><MdOutlineArrowBackIos /></button >  View Vehicle Details</h5>
                </div>

                <div className="card">
                    <div className="pt-3">
                        <div className="d-flex justify-content-center py-2 ">

                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="card-body d-flex justify-content-center">
                                            <img className='  ' width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png' />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="card-body d-flex justify-content-center">
                                            <img className=' ' width={150} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png' />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div class="card-body d-flex justify-content-center">
                                            <img className='  ' width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row  pt-5">
                            <div class="col-sm-6 rounded  card-body ">
                                <div class="d-flex justify-content-center ">
                                    <div class=" ">
                                        <p class=" pt-2 ">Vehicle Name</p>
                                        <p class=" pt-2 ">Car Model</p>
                                        <p class=" pt-2 ">Price Per KM</p>
                                        <p class=" pt-2 ">Driver Night Charges</p>
                                    </div>
                                    <div class="px-5 ">
                                        <p class=" pt-2">22/02/2022</p>
                                        <p class="pt-2 ">Anand</p>
                                        <p class=" pt-2">Varanasi</p>
                                        <p class=" pt-2">589548496984</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 rounded  card-body">
                                <div class="d-flex justify-content-center ">
                                    <div class=" ">
                                        <p class=" pt-2 ">Car Brand</p>
                                        <p class=" pt-2 ">Car Year</p>
                                        <p class=" pt-2 "> Minimum KM per day </p>
                                        <p class=" pt-2 "> Vehicle Availability </p>
                                    </div>
                                    <div class="px-5 ">
                                        <p class="pt-2 ">9898656522</p>
                                        <p class=" pt-2">Anand"gmail.com</p>
                                        <p class="pt-2 ">20</p>
                                        <p class=" pt-2"><Switch defaultChecked style={{ color: 'white', backgroundColor: 'green' }} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VahicleView
