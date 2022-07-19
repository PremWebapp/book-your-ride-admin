import React from 'react'
import { TiGroup } from "react-icons/ti";
import { AiFillCar } from "react-icons/ai";
function DashbordTotalUsesDetailsCard() {
    return (
        <div className='pt-5'>
            <div class=" mx-4  py-4 bg-white card shadow ">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col text-center">
                        <div class="card-body mx-5">
                            <p class="card-text">Total Number of Users</p>
                            <div className="d-flex justify-content-center mx-5 border-bottom ">
                                <h3>8056k</h3>
                                <span className='mx-3'>   <TiGroup size={45} /></span>

                            </div>
                        </div>
                    </div>

                    <div class="col text-center mx-auto">
                        <div class="card-body mx-5 ">
                            <p class="card-text">Total number of service provider</p>
                            <div className="d-flex justify-content-center mx-5 border-bottom ">
                                <h3>8056k</h3>
                               <span className='mx-3'> <AiFillCar size={45} /></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DashbordTotalUsesDetailsCard