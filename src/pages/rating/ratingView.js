import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function RatingView() {
    let navigate = useNavigate();

    // For Category Auto Generate Id 

    return (
        <>
            <div className="container-fluid ">
                {/* USER MANAGEMENT VIEW card start */}
                <div className="pt-4">
                    <h5 className=" font-weight-bold"><button className="pr-3 border-0" onClick={() => navigate(-1)}><MdOutlineArrowBackIos /></button > View Booking Details</h5>
                </div>

                <div className="card">
                    <div>
                        <div className="d-flex justify-content-center py-2">
                            <img className=' border ' width={140} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png' />
                        </div>
                        <div class="row ">
                            <div class="col-sm-12 rounded  card-body px-5">
                                <div class="d-flex ">
                                    <div class=" ">
                                        <p class="  pb-4">User Name</p>
                                        <p class="  pb-4">Comment</p>
                                        <p class="  pb-4">Service Provider Name </p>
                                    </div>
                                    <div class="px-5 ">
                                        <p class="pb-4 ">Anand</p>
                                        <p class=" pb-4">xyz</p>
                                        <p class="pb-4 ">Rajesh</p>
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

export default RatingView
