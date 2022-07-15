import React from 'react'
import TopBar from '../features/admin/topbar/TopBar'
import SettingCard from './helper/settingCard'

function Setting() {
    return (
        <>
            <TopBar />
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
        </>
    )
}

export default Setting