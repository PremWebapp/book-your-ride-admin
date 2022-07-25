
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function NotificationPage() {
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
                                    <div className='card-header bold' >Notifcation</div>


                                    <div class="card-body">
                                        <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <th>Notifcation Title:</th>
                                                    <td><input type="text" readOnly="true" className='form-control' value={data?.name} /></td>
                                                    <th>Notifcation Description:</th>
                                                    <td><textarea readOnly="true" type="text" className='form-control' value={data?.email} /></td>
                                                </tr>
                                                
                                              
                                            </tbody>
                                        </table>

                                        
                                    <div class="card-body">
                                        <div className='col-md-12 '>
                                        <LazyLoadImage
                                            height={'5%'}
                                            width={'5%'}
                                            src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png' // use normal <img> attributes as props
                                            />
                                        </div>
                                    </div>

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
                                    <div className="col-md-4 col-lg-4 col-sm-12  pt-4">
                                        <div>
                                            <select className="form-control">
                                                <option>All</option>
                                                <option>schedule</option>
                                                <option>Past</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12  text-center bg-white border rounded mx-1  '>
                                        <div className='py-4'>
                                        <button className='button_default px-5'>Send Notifcation</button>
                                        </div>
                                    </div>

                      
                    </div>
                </div>
            </div>

        </>
    )
}

export default NotificationPage
