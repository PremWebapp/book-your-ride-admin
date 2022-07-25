import React from 'react'
import { Checkbox } from "antd";

function ReportCart({ title, contants }) {
    return (
        <>
            <div className="p-3">
                <div class="card p-1">
                    <div class="card-body bg-light p-2">
                        <input style={{width: '20px', height: '20px',backgroundColor:'green !important'}}  type="checkbox" />
                        <p class="card-text px-2 ">Lorem Ipsum standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportCart