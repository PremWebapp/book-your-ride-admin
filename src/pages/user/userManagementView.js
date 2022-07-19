import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function UserManagementView() {
    let navigate = useNavigate();

    // For Category Auto Generate Id 

    return (
        <>
            <div className="container-fluid ">
                {/* USER MANAGEMENT VIEW card start */}
                <div className="pt-4">
                    <h5 className=" font-weight-bold"><button className="pr-3 border-0" onClick={() => navigate(-1)}><MdOutlineArrowBackIos /></button > USER MANAGEMENT VIEW</h5>
                </div>

                <div className="card">
                    <div>
                        <div className="d-flex justify-content-center py-2">
                            <img className=' border ' width={140} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png' />
                        </div>
                        <div class="row ">
                            <div class="col-sm-6 rounded  card-body">
                                <div class="d-flex justify-content-center ">
                                    <div class=" ">
                                        <p class="  font-weight-bold">DOJ</p>
                                        <p class="  font-weight-bold">Name</p>
                                        <p class="  font-weight-bold">City</p>
                                        <p class="  font-weight-bold">ID</p>
                                    </div>
                                    <div class="px-5 ">
                                        <p class=" ">22/02/2022</p>
                                        <p class=" ">Anand</p>
                                        <p class=" ">Varanasi</p>
                                        <p class=" ">589548496984</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 rounded  card-body">
                                <div class="d-flex justify-content-center ">
                                    <div class=" ">
                                        <p class="  font-weight-bold">Mobile</p>
                                        <p class="  font-weight-bold">Email</p>
                                    </div>
                                    <div class="px-5 ">
                                        <p class=" ">9898656522</p>
                                        <p class=" ">Anand"gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="row px-3">
                        <div className="col-md-12 col-lg-12 col-sm-12 ">
                            <div className="row py-4 bg-white border-top  my-4">

                                <div className="col-md-4 col-lg-4 col-sm-12  pt-4">
                                    <div>
                                        <select className="form-control">
                                            <option>All</option>
                                            <option>schedule</option>
                                            <option>Past</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-12 text-center pt-4">
                                    <h5 className="font-weight-bold">
                                        User Stats
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row px-3">
                        <div className="col-md-12 col-lg-12 col-sm-12 ">
                            <div className="row py-4 bg-white border-top  my-4 text-center">

                                <div className="col-md-6 col-lg-6 col-sm-12 ">
                                    <div>
                                      <h5 className="font-weight-bold">Upcoming Booking 1</h5>
                                      <h6 className="">Upcoming Booking 1</h6>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-12 ">
                                    <div>
                                      <h5 className="font-weight-bold">Upcoming Booking 2</h5>
                                      <h6 className="">Upcoming Booking 2</h6>
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

export default UserManagementView
