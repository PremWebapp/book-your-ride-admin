import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { message, Table, Switch } from 'antd';

function VahicleView() {
    let navigate = useNavigate();

    // For Category Auto Generate Id 

    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column py-3">
            <div id="content">
                <div className='container-fluid'>
                    <div className='row '>
                        <div className='col-md-12 ' >
                            <div class="card">
                                <div className='card-header bold' onClick={() => navigate(-1)}><span className="px-2"><MdOutlineArrowBackIos /></span>View Vehicle Details</div>

                                <div class="card-body">
                                    <div className='col-md-12 text-center'>
                                        <img alt="profile_image" src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png' width={'30%'} />
                                    </div>
                                </div>

                                <div class="card-body">
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <th>Vehicle Name</th>
                                                <td><input type="text" readOnly="true" className='form-control' /></td>
                                                <th>Car Brand</th>
                                                <td><input readOnly="true" type="text" className='form-control'  /></td>
                                            </tr>
                                            <tr>
                                                <th>Car Model</th>
                                                <td><input readOnly="true" type="text" className='form-control'  /></td>
                                                <th>Car Year</th>
                                                <td><input readOnly="true" type="text" className='form-control' /></td>
                                            </tr>
                                            <tr>
                                                <th>Price Per KM</th>
                                                <td><input readOnly="true" type="text" className='form-control'  /></td>
                                                <th>Minimum KM per day</th>
                                                <td><input readOnly="true" type="text" className='form-control' /></td>
                                            </tr>
                                            <tr>
                                                <th>Driver Night Charges</th>
                                                <td><input readOnly="true" type="text" className='form-control'  /></td>
                                                <th>Vehicle Availability</th>
                                                <td><Switch defaultChecked style={{ color: 'white', backgroundColor: 'green' }}  /></td>
                                            </tr>
                                        </tbody>
                                    </table>

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
