import React from 'react';
import Footer from '../../../../compnent/footer/Footer';
import SideNav from '../../../../compnent/sidenav/SideNav';
import TopBar from '../../topbar/TopBar';
import DriverDetailContent from './DriverDetailContent';

function DriverDetailManagement() {
  return (
      <>
        {/* <!-- Topbar --> */}
        <TopBar />
                        {/* <!-- End of Topbar --> */}
            {/* <div id="wrapper">
            <SideNav /> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- /.container-fluid(Content) --> */}
                        <DriverDetailContent />
                        

                    </div>


                    {/* <!-- End of Main Content --> */}
                    <Footer />

                </div>
                {/* <!-- End of Content Wrapper --> */}
            {/* </div> */}
      </>
  );
}

export default DriverDetailManagement;
