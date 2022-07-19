import React from 'react'
import SettingCard from '../dashbord/helper/settingCard'

function Setting() {
    return (
        <>
         <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
<div id="content">
            <div className="px-4">
                <div className="py-4">
                    <h4 className="px-5">SETTING</h4>
                </div>
                <div className="">
                   <SettingCard/>
                   <SettingCard/>
                   <SettingCard/>
                   <SettingCard/>
                   <SettingCard/>
                   <SettingCard/>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Setting