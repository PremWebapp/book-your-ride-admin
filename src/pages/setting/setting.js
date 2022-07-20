import React from 'react'
import SettingCard from '../dashbord/helper/settingCard'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Setting() {
    let navigate = useNavigate();

    return (
        <>


            <div id="content-wrapper" className="d-flex flex-column py-3">
                <div id="content">
                    <div className='container-fluid'>
                        <div className='row '>
                            <div className='col-md-12 ' >
                                <div class="card">
                                    <div className='card-header bold'>SETTING</div>

                                   <div className='px-2'>
                                   <SettingCard />
                                    <SettingCard />
                                    <SettingCard />
                                    <SettingCard />
                                    <SettingCard />
                                    <SettingCard />

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

export default Setting