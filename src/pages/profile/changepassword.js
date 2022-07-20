import React from 'react';

function ResetPassword() {
    const data = JSON.parse(localStorage.getItem('user'));
    return (<>
        <div id="content-wrapper" className="d-flex flex-column py-3">
            <div id="content">
                <div className='container-fluid'>
                    <div className='row '>
                        <div className='col-md-12 ' >
                            <div class="card">
                                <div className='card-header bold'>CHANGE PASSWORD </div>

                                <div class="card-body">
                                    <div className='col-md-12 text-center'>
                                        <img alt="profile_image" src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png' width={'30%'} />
                                    </div>
                                </div>

                                <div class="card-body">
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <th>Current Password</th>
                                                <td><input type="text" readOnly="true" className='form-control' value={data?.name} /></td>
                                                <th>New Password</th>
                                                <td><input readOnly="true" type="text" className='form-control' value={data?.email} /></td>
                                            </tr>
                                            <tr>
                                                <th>Confrm Password</th>
                                                <td><input readOnly="true" type="text" className='form-control' value={data?.mobile} /></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className='card-footer'>
                                    <div className='col-md-12  text-center'>
                                        <button className='btn btn-outline-warning px-5'>Save</button>
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

export default ResetPassword;
