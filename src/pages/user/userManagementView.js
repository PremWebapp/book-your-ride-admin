import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function UserManagementView() {
    let navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            {/* USER MANAGEMENT VIEW card start */}

            <div id="content-wrapper" className="d-flex flex-column py-3">
                <div id="content">
                    <div className='container-fluid'>
                        <div className='row '>
                            <div className='col-md-12 ' >
                                <div class="card">
                                    <div className='card-header bold' onClick={() => navigate(-1)}><span className="px-2"><MdOutlineArrowBackIos /></span> USER MANAGEMENT VIEW</div>

                                    <div class="card-body">
                                        <div className='col-md-12 text-center'>
                                            <img alt="profile_image" src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png' width={'30%'} />
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <th>DOJ</th>
                                                    <td><input type="text" readOnly="true" className='form-control' value={data?.name} /></td>
                                                    <th>Mobile</th>
                                                    <td><input readOnly="true" type="text" className='form-control' value={data?.email} /></td>
                                                </tr>
                                                <tr>
                                                    <th>Name</th>
                                                    <td><input readOnly="true" type="text" className='form-control' value={data?.mobile} /></td>
                                                    <th>Email</th>
                                                    <td><input readOnly="true" type="text" className='form-control' /></td>
                                                </tr>
                                                <tr>
                                                    <th>City</th>
                                                    <td><input readOnly="true" type="text" className='form-control' value={data?.city} /></td>
                                                    <th>Address</th>
                                                    <td><input readOnly="true" type="text" className='form-control' value={data?.add_type} /></td>
                                                </tr>
                                                <tr>
                                                    <th>ID</th>
                                                    <td><input readOnly="true" type="text" className='form-control' value={data?.city} /></td>

                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="row px-3 ">
                            <div className="col-md-12 col-lg-12 col-sm-12  ">
                                <div className="row py-4 bg-white border-top  my-2 border rounded">

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
                                <div className="row py-4 bg-white border-top text-center border rounded">

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
            </div>

        </>
    )
}

export default UserManagementView
