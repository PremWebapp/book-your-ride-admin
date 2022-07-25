import React from 'react'
import { TiGroup } from "react-icons/ti";
import { AiFillCar } from "react-icons/ai";
import style from '../dashbord.module.css'

function DashbordTotalUsesDetailsCard() {
    return (
        <div class="row pt-4 px-3">
            <div class="col-sm-7">
                <div class={` ${style.cardPadding} shadow-sm `}>
                    <div class="card-body d-flex justify-content-center bg-white  ">
                        <div className=" text-center my-auto py-5">
                            <h6 class="card-text font-weight-bold text-danger ">Total Number of Users</h6>
                            <h4 >8056 k</h4>
                        </div>
                        <span className='mx-3 text-danger my-auto'>   <TiGroup size={90} /></span>
                    </div>
                </div>
            </div>
            <div class="col-sm-5">
                <div class={` ${style.cardPadding} shadow-sm `}>
                    <div class="card-body d-flex justify-content-center bg-white ">
                        <div className="text-center my-auto py-5">
                            <h6 class="card-text font-weight-bold text-danger">Total number of service Provider</h6>
                            <h4  >9056 k</h4>
                        </div>
                        <span className='mx-3 text-danger my-auto'> <AiFillCar size={90} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashbordTotalUsesDetailsCard