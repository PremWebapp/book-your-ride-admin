import React from 'react'
import Footer from '../../footer/Footer'
import SideNav from '../../sidenav/SideNav'
import TopBar from '../../topbar/TopBar'
import RestroDetailContent from './RestroDetailContent'

function RestroDetailManagement() {
    return (
        <>
        {/* <!-- Topbar --> */}
        <TopBar />
                        {/* <!-- End of Topbar --> */}
            <div id="wrapper">
            <SideNav />

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- /.container-fluid --> */}

                        <RestroDetailContent />

                    </div>


                    {/* <!-- End of Main Content --> */}
                    <Footer />

                </div>
                {/* <!-- End of Content Wrapper --> */}
            </div>
        </>
    )
}

export default RestroDetailManagement
