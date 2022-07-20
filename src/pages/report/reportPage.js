import React from 'react'
import ReportCart from './reportCart'

function ReportPage() {
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column py-3">
                <div id="content">
                    <div className='container-fluid'>
                        <div className='row '>
                            <div className='col-md-12 ' >
                                <div class="card">
                                    <div className='card-header bold'>REPORT</div>

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
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReportPage