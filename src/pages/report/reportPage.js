import React from 'react'
import ReportCart from './reportCart'

function ReportPage() {
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">
                    <div className="px-4">
                        <div className="py-4">
                            <h4 className="px-5">Report Management</h4>
                        </div>
                        <div className="row row-cols-sm-4 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 g-4 g-lg-3 row-cols-12 ">
                                <ReportCart />
                                <ReportCart />
                                <ReportCart />
                                <ReportCart />
                                <ReportCart />
                                <ReportCart />
                                <ReportCart />
                                <ReportCart />
                                <ReportCart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportPage