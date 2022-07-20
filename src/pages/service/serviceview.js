import React from 'react'
import { Tabs} from 'antd'
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

function ServiceView() {
    let navigate = useNavigate();

    const { TabPane } = Tabs;
   


    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column ">
                <div id="content">
                    <div className="card-container container-fluid  ">

                        {/* <h4 className="ml-5 colorblack bold mt-3">cacsacsacsacacs</h4> */}
                        <div className="mt-4">
                            <Tabs type="card" centered >
                                <TabPane tab="DETAILS " key="1" >

                                    <div className='row '>
                                        <div className='col-md-12 ' >
                                            <div className='card-header bold' onClick={() => navigate(-1)}><span className="px-2"><MdOutlineArrowBackIos /></span>  Service Provider View Detail</div>

                                            <div class="card-body bg-white border-left border-right">
                                                <div className='col-md-12 text-center'>
                                                    <img alt="profile_image" src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png' width={'30%'} />
                                                </div>
                                            </div>

                                            <div class="card-body bg-white border-left border-right border-bottom rounded">
                                                <table className='table'>
                                                    <tbody>
                                                        <tr>
                                                            <th>Name</th>
                                                            <td><input type="text" readOnly="true" className='form-control' /></td>
                                                            <th>Service Provider ID</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Mobile</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                            <th>Email</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                        </tr>
                                                        <tr>
                                                            <th>DOJ</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                            <th>Email</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                        </tr>
                                                      
                                                    </tbody>
                                                </table>

                                            </div>

                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="BANK DETAIL" key="2">
                                <div className='row '>
                                        <div className='col-md-12 ' >
                                            <div className='card-header bold' onClick={() => navigate(-1)}><span className="px-2"><MdOutlineArrowBackIos /></span>  Service Provider View Detail</div>

                                            <div class="card-body bg-white border-left border-right">
                                                <div className='col-md-12 text-center'>
                                                    <img alt="profile_image" src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png' width={'30%'} />
                                                </div>
                                            </div>

                                            <div class="card-body bg-white border-left border-right border-bottom rounded">
                                                <table className='table'>
                                                    <tbody>
                                                        <tr>
                                                            <th>ACCOUNT HOLDER NAME</th>
                                                            <td><input type="text" readOnly="true" className='form-control' /></td>
                                                            <th>BANK NAME</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                        </tr>
                                                        <tr>
                                                            <th>ACCOUNT NUMBER</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                            <th>RE ENTER ACCOUNT NUMBER</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                        </tr>
                                                        <tr>
                                                            <th>IFSC CODE</th>
                                                            <td><input readOnly="true" type="text" className='form-control' /></td>
                                                        </tr>
                                                      
                                                    </tbody>
                                                </table>

                                            </div>

                                        </div>
                                    </div>
                                </TabPane>

                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceView