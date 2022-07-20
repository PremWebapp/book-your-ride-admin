import React from 'react'
import { FaEdit } from "react-icons/fa";

function SettingCard({title, contants}) {
    return (
        <>
            <div className="py-3  ">
            <div className=" row d-flex px-5 ">
                <h6 className=" col font-weight-bold ">Title</h6>
                <div className="col d-flex justify-content-end align-items-end" >
                    <p><FaEdit size={20} /></p>
                </div>
            </div>
            <div class="card  ">
                <div class="card-body border border-3 shadow">
                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default SettingCard