import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function EditProfilePage() {
    const data = JSON.parse(localStorage.getItem('user'));
    return (<>
        <div id="content-wrapper" className="d-flex flex-column py-3">
            <div id="content">
                <div className='container-fluid'>
                    <div className='row '>
                        <div className='col-md-12 ' >
                            <div class="card">
                                <div className='card-header bold'>PROFILE EDIT</div>

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
                                                <th>Name</th>
                                                <td><input type="text" readOnly="true" className='form-control' value={data?.name} /></td>
                                                <th>Email</th>
                                                <td><input readOnly="true" type="text" className='form-control' value={data?.email} /></td>
                                            </tr>
                                            <tr>
                                                <th>Mobile Number</th>
                                                <td><input readOnly="true" type="text" className='form-control' value={data?.mobile} /></td>
                                                <th>Country</th>
                                                <td><input readOnly="true" type="text" className='form-control' /></td>
                                            </tr>
                                            <tr>
                                                <th>City</th>
                                                <td><input readOnly="true" type="text" className='form-control' value={data?.city} /></td>
                                                <th>Address</th>
                                                <td><input readOnly="true" type="text" className='form-control' value={data?.add_type} /></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className='card-footer'>
                                    <div className='col-md-12 text-center'>
                                        <button className='button_default px-5'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default EditProfilePage;
