import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function RatingView() {
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
                                    <div className='card-header bold' onClick={() => navigate(-1)}><span className="px-2"><MdOutlineArrowBackIos /></span>View Rating Details</div>
                                    <div class="card-body">
                                        <div className='col-md-12 text-center'>
                                        <LazyLoadImage
                                            height={'20%'}
                                            width={'20%'}
                                            src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png' // use normal <img> attributes as props
                                            />
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <th>User Name</th>
                                                    <td><input type="text" readOnly="true" className='form-control' /></td>
                                                    <th>Comment</th>
                                                    <td><textarea readOnly="true" type="text" className='form-control' /></td>
                                                </tr>
                                                <tr>
                                                    <th>Service Provider Name</th>
                                                    <td><input readOnly="true" type="text" className='form-control' /></td>
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

export default RatingView
