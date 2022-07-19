import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NotificationPage() {
    let navigate = useNavigate();

    return (
        <>
            <div className="container-fluid ">
                {/* USER MANAGEMENT VIEW card start */}
                <div className="pt-4">
                    <h5 className=" font-weight-bold"> Notifcation</h5>
                </div>

                <div className="card">
                    <div class="row pt-4 ">
                        <div class="col-sm-12 rounded  card-body px-5">
                            <div class="d-flex ">
                                <div class=" ">
                                    <p class="  pb-4">Notifcation Title:</p>
                                    <p class="  pb-4">Notifcation Description:</p>
                                </div>
                                <div class="px-5 ">
                                    <p class="pb-4 ">Anand</p>
                                    <p class=" pb-4">xyz</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default NotificationPage
